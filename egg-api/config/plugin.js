'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
    // 跨域插件
    cors: {
      enable: true,
      package: 'egg-cors',
    },

    // 配置mysql数据库
    sequelize: {
      enable: true,
      package: 'egg-sequelize'
    },
    // 参数验证
    valparams : {
      enable : true,
      package: 'egg-valparams'
    },
};
