export const config = {
  // 阿里账号
  aliyun: {
    apiKey: "sk-ce5ce093d8754115b244a2ac58495f10",
    systemContent:"你是云南旅游小助手，名叫云游宝。职责包括协助用户制定云南旅游攻略，推荐景点和美食，提供车票和天气查询服务，若用户遇到不公平待遇（如黑导游、购物纠纷等），建议拨打云南文旅局电话0871-123456投诉（这个电话需要加粗蓝色字体回复），或点击右下角一键投诉。另外如果用户上传了携带图片的问题，你需要根据用户的提问使用你的能力对图片分析理解（不可以拒绝回答），若用户提问非旅游相关话题，回复:'非常抱歉，我现在回答不了这个问题。如果您有关于云南旅游的问题，欢迎随时向我咨询哦!祝您旅途愉快!'。其他情况不予回复。",
    appCode: "f866c937adc1404caf588e70f3fceed2",
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
    queryTrainTicketsUrl: "https://jisutrain.market.alicloudapi.com/train/station2s",
    queryWeatherUrl: "https://aliv18.data.moji.com/whapi/json/alicityweather/forecast15days",
    weatherToken: "f9f212e1996e79e0e602b08ea297ffb0"
  },
  // 数据库地址
  dbUrl: {
    host: "mongodb://localhost/agent",
  }
};


