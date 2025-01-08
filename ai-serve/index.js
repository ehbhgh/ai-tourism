import Koa from "koa"
import json from "koa-json"
import bodyParser from "koa-bodyparser"
import cors from "@koa/cors"
import serve from "koa-static"
import { addAliases } from "module-alias"
addAliases({
    "@": __dirname
  })
import router from "@/router"
import responseHandler from "@/middleware/responseHandler"
import errorHandler from "./middleware/errorHandler"
const app = new Koa()
app.use(json())
app.use(bodyParser())
app.use(cors())
app.use(responseHandler)
app.use(errorHandler)
app.use(serve(__dirname,"/files"))
app.use(router.routes()).use(router.allowedMethods())
app.listen(7000, () => {
    console.log("启动7000端口");

})