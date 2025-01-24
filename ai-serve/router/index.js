import Router from "@koa/router"
import chat from "@/controller/chat"
import uploadFile from "@/middleware/uploadFile"
import callTool from "@/controller/calltool"
import goods from "@/controller/goods"
const router = new Router()

//聊天接口
router.post("/chatMessage",chat.chatMessage)

//上传接口
router.post("/uploadFile",uploadFile.single("file"),chat.uploadFile)


//查询火车票
router.post("/queryTrainTicker",callTool.queryTrainTicker)

//查询天气
router.get("/queryWeather",callTool.queryWeather)

//商品
//新增商品
router.post("/goods/add",goods.addGoods)

//根据商品id查询详情
router.post("/goods/detail",goods.queryGoodById)

//根据关键字搜索商品
router.post("/goods",goods.searchGoods)
export default router