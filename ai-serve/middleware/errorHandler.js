import logger from "@/utils/log4Middleware"
const errorHandler = async (ctx, next) => {
    try {
        logger.info(`输入日志:${JSON.stringify(ctx)}`)
        await next()
    } catch (errorData) {
        if (errorData.validate === null) {
            const { code, msg, error } = errorData
            const errorVal = error || null
            ctx.send(null, code, msg, errorVal, code)
        }
        else if (errorData.message === "Unexpected end of form") {
            ctx.send(null, 400, "请上传图片", null, 422)
        }
        else {
            const error = errorData.message
            const status = errorData.status || errorData.statusCode || 500;
            ctx.send(null, 500, "服务内部错误", error, status)
        }
    }
}

export default errorHandler