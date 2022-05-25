module.exports = (option, app) => {
  return async function errorHandler(ctx, next) {
    // console.log('我是errorHandler')
  // 拦截
    // return next()
    try {
      await next()
      
    } catch (error) {
      // 错误存放在logs文件夹中
      ctx.app.emit('error', error, ctx)

      ctx.status = error.status;
      
      if(ctx.status == 422) {
        return ctx.body = {
          msg: 'fail',
          data: error.errors
        }
      }
      ctx.body = {
        msg: 'fail',
        data: error.message
      }
    }
  }
}