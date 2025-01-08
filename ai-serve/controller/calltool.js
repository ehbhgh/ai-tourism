import { config } from "@/config"
import validate from "@/utils/validate";
import axios from "axios";
import https from "https"
const json = require("@/db/city.json")
class CallToolController {
    //查询火车票
    async queryTrainTicker(ctx) {
        const { departure, date, destination } = ctx.request.body
        await validate.nullCheck(departure, "请传入出发地")
        await validate.nullCheck(date, "请传入时间")
        await validate.nullCheck(destination, "请传入目的地")
        try {
            const res = await axios.get(config.aliyun.queryTrainTicketsUrl, {
                params: {
                    start: departure,
                    end: destination,
                    date
                },
                headers: {
                    Authorization: `APPCODE ${config.aliyun.appCode}`
                }
            })
            ctx.send(res.data.result.list, 200, "查询火车票成功", null, 200)
        } catch (error) {
            const status = ["201", "203"]
            if (status.includes(error.response.data.status)) {
                ctx.send(null, 200, "没有查询到对应的车票信息，请重试", null, error.response.data.status)
            }
            else {
                throw ({ msg: "查询出现异常错误", code: 400, validate: null })
            }
        }
    }

    //查询天气
    async queryWeather(ctx) {
        const { city } = ctx.query
        await validate.nullCheck(city, "请传入城市")
        const cityMsg = json.find(item => item.cityName === city || item.cityName === `${city}市` || item.cityName === `${city}县`)
        if (cityMsg === undefined) {
            throw ({ msg: "查询不到天气信息，请重试", code: 400, validate: null })
        }
        const cityId = cityMsg.cityId;
        let data = new URLSearchParams();
        data.append('token', config.aliyun.weatherToken);
        data.append('cityId', cityId);
        // 创建一个不进行 SSL 校验的实例
        const agent = new https.Agent({
            rejectUnauthorized: false  // 禁用 SSL 验证
        });
        // 创建一个不进行 SSL 校验的实例
        try {
            const res = await axios.post(config.aliyun.queryWeatherUrl, data, {
                headers: {
                    Authorization: `APPCODE ${config.aliyun.appCode}`,
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                },
                httpsAgent: agent // 添加 httpsAgent 防止 SSL 校验问题
            })

            ctx.send(res.data.data, 200, "查询天气成功", null, 200)
        } catch (error) {
            throw ({ msg: "查询出现异常错误", code: 400, validate: null })
        }



    }
}

export default new CallToolController()