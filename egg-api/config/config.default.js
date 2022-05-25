/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1649259411995_9096';

  // add your middleware config here
  config.middleware = ['errorHandler'];
  config.errorHandler = {
    // 中间件
    // enable: false,
    match:[ '/user/list', '/user/read'], //指定列表走中间件
    // 排除法。跟match一样的效果/
    // ignore: []
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 关闭cfrs开启跨域
  config.security = {
    // 关闭csrf
    csrf: {
      enable: false
    },
    // 跨域白名单
    domainWhiteList: [],
  };
  // 允许跨域的方法
  config.cors = {
    origin: '*',
    allowMethods: 'GET, PUT, POST, DELETE, PATACH'
  };
  
  // 数据库
  exports.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    host: '127.0.0.1',
    username: 'root',
    password: 'root',
    port: 3306,
    database: 'eggapi',
    // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
    // 时区
    timezone: '+08:00',
    define: {
      // 取消数据表名复数
      freezeTableName: true,
      // 自动写入时间戳 created_at_updated_at
      timestamps: true,
      // 字段生成软删除时间戳 deleted_at
      // paranoid: true,
      createdAt: 'created_at',
      updateAt: 'updated_at',
      // deletedAt: 'deleted_at',
      // 所有驼峰命名格式化
      underscored: true
    }
  };
  // 参数验证 中文
  config.valparams = {
    locale: 'zh-cn',
    throwError: true
  };
  return {
    ...config,
    ...userConfig,
  };
};
