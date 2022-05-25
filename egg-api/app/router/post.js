// 路由分组，router文件夹用来对controller里的数据进行分组
module.exports = app => {
  const { router, controller } = app;
  router.resources('post', '/api/post', controller.post)
}