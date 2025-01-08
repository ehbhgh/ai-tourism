import OpenAI from "openai";
import validate from "@/utils/validate";
import { config, tools } from "@/config"

const openai = new OpenAI(
    {
        // 若没有配置环境变量，请用百炼API Key将下行替换为：apiKey: "sk-xxx",
        apiKey: config.aliyun.apiKey,
        baseURL: config.aliyun.baseURL
    }
);

class ChatController {
    async chatMessage(ctx) {
        const { chatMessage } = ctx.request.body
        await validate.isArraryCheck(chatMessage, "chatMessage不能为空", "chatMessage")
        let messages = [
            {
                role: "system",
                content: config.aliyun.systemContent,
            },
            ...chatMessage,
        ];
        const completion = await openai.chat.completions.create({
            model: "qwen-plus", //模型列表
            messages,
            stream: true,
            tools
        });
        ctx.status = 200;
        let functionName = ""; //函数名称
        let requireParameters = ""; //函数参数
        for await (const chunk of completion) {
            const str = JSON.stringify(chunk);
            const obj = JSON.parse(str);
            // 判断是否可以调用函数，工具
            const choices = obj.choices[0].delta;
            if (choices.content === null && choices.tool_calls) {
                if (messages[messages.length - 1].role !== "assistant") {
                    messages.push({ role: "assistant", content: "", tool_calls: [] });
                    var lastMessage = messages[messages.length - 1];
                }
                // 模型回复的要调用的工具和调用工具时需要的参数取出来
                const toolCalls = choices.tool_calls;
                if (toolCalls.length > 0) {
                    if (lastMessage.tool_calls.length <= 0) {
                        functionName = toolCalls[0].function.name;
                        lastMessage.tool_calls.push(toolCalls[0]);
                    }
                }
                // 遍历取出函数参数
                toolCalls.forEach((item) => {
                    if (item.function.arguments) {
                        requireParameters += item.function.arguments;
                    }
                    lastMessage.tool_calls[0].function.arguments = requireParameters;
                });
            }
            // 等遍历完毕把工具调用的结果返给前端
            if (obj.choices[0].finish_reason == "tool_calls") {
                const resObj = JSON.stringify({ type: "function", functionName, data: JSON.parse(requireParameters) });
                const buffer = Buffer.from(resObj);
                ctx.res.write(buffer);
            }
            // 没有工具调用
            if (choices.content) {
                const resObj = JSON.stringify({ type: "content", functionName: "", data: choices.content });
                const buffer = Buffer.from(resObj);
                ctx.res.write(buffer);
            }
        }
    }

    async uploadFile(ctx) {
        const host = ctx.host
        if (ctx.file == undefined) {
            ctx.send(null, 400, "请上传正确的图片", null, 422)
        }
        ctx.send({
            url: `http://${host}/${ctx.file.destination}${ctx.file.filename}`,
            filename: ctx.file.filename
        }, 200, "上传成功")
    }
}

export default new ChatController()