'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list', controller.home.list);
  
  // // 新建路有
  // router.get('/user/list', controller.user.index);
  // // 传参数通过:属性名
  // router.get('/user/read/:id', controller.user.read);
  // // 用POST创建对象时，之前并不知道要操作的对象，由HTTP服务器为新创建的对象生成一个唯一的URI；使用POST修改已存在的对象时，一般只是修改目标对象的部分内容。
  // // router.post('/user/create', controller.user.create)
  // // 使用PUT时，必须明确知道要操作的对象，如果对象不存在，创建对象；如果对象存在，则全部替换目标对象。
  // // router.put('/user/create', controller.user.create)
  // router.delete('/user/create', controller.user.create)
  // // 资源路由 第一项为标识 第二项为路径 第三项为目录
  // // router.resources('post', '/api/post', controller.post)
  // router.resources('post', '/api/post', controller.post)
  // 路由分组 引入
  require('./router/user')(app);
  require('./router/post')(app);
};
