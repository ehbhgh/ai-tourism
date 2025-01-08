const responseHandler = async (ctx, next) => {
    ctx.send = (data = null, code = 200, msg = "success", error = null, serviceCode = 200) => {
        ctx.body = { data, msg, error, serviceCode }
        ctx.status = code

    }
    await next()
}


export default responseHandler