// 工具，函数设计
export const tools = [
    // 查询火车票，函数名称：trainTickets
    {
        type: "function",
        function: {
            name: "trainTickets",
            description:
                "只要用户询问查询火车票相关的问题，你就应该触发该工具调用，帮助用户查询火车票或者动车票的票价，你不需要询问用户查询的车票类型，你更不要试图使用你内部的API查询， 需要用户提供出发地，目的地，和出行日期,这三个值需要用户必须提供，缺少任何一个你都不能触发工具调用，你需要提示用户:'比如你可以这样问我哦，昆明到大理，2024年10月9号出发'，另外日期格式是年月日，比如：2024年10月9日，如果用户没有提供准确的年月日，你需要提醒用户提供准确的日期,当用户提供了年月日后，你还需要转换成'YYYY-MM-DD'的格式，如果用户输入了省市，你需要去掉省，只留下市，比如用户提供了云南省昆明市，你只要留下昆明市即可",
            parameters: {
                type: "object",
                properties: {
                    departure: {
                        //出发地
                        type: "string",
                        description: "出发地",
                    },
                    destination: {
                        //目的地
                        type: "string",
                        description: "目的地",
                    },
                    date: {
                        //出发时间
                        type: "string",
                        description: "日期",
                    },
                },
                required: ["departure", "destination", "date"],
            },
        },
    },
    // 查询天气，函数名称：getWeather
    {
        type: "function",
        function: {
            name: "getWeather",
            description:
                "只要用户询问查询天气时，你就应该触发该工具调用，帮助用户查询某个城市的天气，你不能使用你自己给出的天气数据，因为那是不准确的，需要用户提供一个城市名就可以，这个城市名必须提供，否则不能触发函数调用，你需要提示用户:'比如你可以这样问我哦！昆明市的天气如何！',但有可能用户会提供区县名，这时候需要你自行判断该区县属于哪个城市，比如用户提供玉龙雪山，那么玉龙雪山属于丽江，那只需要丽江这个城市名，但是如果你不能100%的判断该区县属于哪个城市，请不要随意给出城市名，你需要告诉用户提供准确的城市名",
            parameters: {
                type: "object",
                properties: {
                    city: {
                        //出发地
                        type: "string",
                        description: "城市名，比如昆明市，大理市",
                    },
                },
                required: ["city"],
            },
        },
    },
];



