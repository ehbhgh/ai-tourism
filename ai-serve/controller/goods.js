import { modelGoods } from "@/model/goods"
import validate from "@/utils/validate";
import fs from "fs"
class GoodsController {
    async addGoods(ctx) {
        // const { coverImage, contentTitle, price, productImages } = ctx.request.body
        // await validate.nullCheck(coverImage, "请传入图片地址")
        // await validate.nullCheck(contentTitle, "请传入标题")
        // await validate.nullCheck(contentTitle, "请传入标题")
        // fs.readdirSync("./")
        const res = await modelGoods.create({
            coverImage,
            contentTitle,
            price,
            productImages
        })
    }
}

export default new GoodsController()