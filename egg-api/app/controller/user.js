'use strict';

const user = require('../router/user');

const Controller = require('egg').Controller;
let demo = [{
  id: 1,
  username: "User",
  nickname: "Name",
  sex: '男'
}, {
  id: 2,
  username: "User",
  nickname: "Name",
  sex: '男'
}, {
  id: 3,
  username: "User",
  nickname: "Name",
  sex: '男'
},]
class UserController extends Controller {
  // 获取用户列表的方法
  async index() {
    // 拿到数据
    let result = []
    // 验证用户登陆状态
    this.ctx.throw(500, 'Error')
    // 拿到分页
    let page = this.ctx.query.page ? parseInt(this.ctx.query.page) : 1
    let limit = 5
    let offset = (page - 1) * 5
    // 查询多个用户
    // 模糊字符匹配
    let Op = this.app.Sequelize.Op
    result =  await this.app.model.User.findAll({
      where: {
        username:{
          [Op.like]:"%用户%"
        },
        // sex: '女',
        // id: {
        //   // [Op.gt]: 5
        // },
      },
      // 限制查询表名
      // attributes: ['id', 'username', 'sex']
      attributes: {
        // 排除
        exclude: ['password']
      },
      // 排序 desc降序 ASC升序
      order: [
        ['updated_at', 'DESC'],
        ['id', 'DESC'],
      ],
      // 偏移量
      offset,
      // 限制几条
      limit,
    })
    // 查询多个并统计
    // result = await this.app.model.User.findAndCountAll()
    
    // 相应回去
    this.ctx.body = {
      msg: 'ok',
      data: result
    }
    
  }
  // 取用户数据
  // 查询用户
  async read() {
    this.ctx.throw('500', '错了错了')
    // // 通过params来获取传递过来的id
    // let id = this.ctx.params.id
    // let detail = demo.find(item => item.id === parseInt(id))
    // // 拿到url?传递的参数，需要跟浏览器url地址的属性相对应
    // let pages = this.ctx.query.page;
    // let statuses = this.ctx.query.status;
    // // 修改状态码
    // this.ctx.status = 201
    // this.ctx.body = {
    //   msg: 'ok',
    //   data: detail + pages + statuses
    // }
    let id = parseInt(this.ctx.params.id) 
    // let detail = await this.app.model.User.findByPk(id)
    // 通过主键查询单个数据
    // if(!detail) {
    //   return this.ctx.body = {
    //     msg: 'false',
    //     data: '用户不存在'
    //   }
    // }
    // 查询单个
    let detail = await this.app.model.User.findOne({
      where: {
        id,
        sex: '女'
      }
    })
    this.ctx.body = {
        msg: 'ok',
        data: detail
    }
  }

  // 创建用户
  // post请求
  async create() {

  // 抛出异常
  // this.ctx.throw(500, '错了')
  
  // 写入数据库
  // this.ctx.request.body  post paych put 请求
  // 1:拿到SequeLize模型 model目录
  let params = this.ctx.request.body;
  // 参数验证 暂时不做 17 开始啦
  this.ctx.validate({
    // 验证规则
    username : {
      type: 'string',
      required: true, 
      desc: '用户名'
    }, // desc描述名 别名
    password : {
      type: 'string', 
      required: true, 
      desc: '密码'
    },
    sex: {
      type: 'string', 
      required: false, 
      defValue: '男', 
      desc: '性别'
    }
  })
    // 新增单个
    let res = await this.app.model.User.create(params)
    // 批量新增
  //   let res = await this.app.model.User.bulkCreate([
  //     {
  //       username: "用户01",
  //       password: 'mima1',
  //       sex: '男',
  //     },
  //     {
  //       username: "用户02",
  //       password: 'mima2',
  //       sex: '男',
  //     },
  //     {
  //       username: "用户03",
  //       password: 'mima3',
  //       sex: '男',
  //     },
  // ]);
    // console.log(this.ctx.request.body);
    // 成功
    this.ctx.body = res
  }
  // 删除
  async destroy() {
    // this.ctx.body = 123
    // 删除单个
      //   let id = this.ctx.params.id ? parseInt(this.ctx.params.id) : 0
      //   let data = await this.app.model.User.findByPk(id)
      //   if(!data) {
      //     return this.ctx.body = {
      //       msg: 'fail',
      //       data: "不存在该shuju"
      //     }
      //   }
      //   let res = await data.destroy();
      //   this.ctx.body = {
      //     msg: 'success',
      //     data: res
      //   }
      // }
    // 批量删除
    let Op = this.app.model.Sequelize.Op
    let res = await this.app.model.User.destroy({
      where: {
        id: {
          [Op.lte]: 5
        }
      }
    });
    this.ctx.body = {
      msg: 'success',
      data: res
    }
  }

}

module.exports = UserController;
