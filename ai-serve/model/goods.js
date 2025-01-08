import { Schema, model, mongoose } from "@/config"
import dayjs from "dayjs"
const GoodsSchema =Schema({
    coverImage: {
        type: String,
        required: true
    },
    contentTitle: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    productImages: {
        type: [String],
        required: true
    },
    createTime: {
        type: String,
        default: () => dayjs().format("YYYY-MM-DD HH:mm:ss")
    }
})


export const modelGoods=model("goods",GoodsSchema)
