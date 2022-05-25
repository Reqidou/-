'use strict';

const Controller = require('egg').Controller;
// 资源路由
class PostController extends Controller {
  // 列表页
  async index() {
    this.ctx.body = '列表页'
  }
  // 表单页
  async new() {
    this.ctx.body = '表单页'

  }
  // 新增逻辑 post 默认显示，不需要添加create
  async create() {
    this.ctx.body = '新增逻辑'

  }
  // 详情页
  async show() {
    
    this.ctx.body = '详情页' + this.ctx.params.id

  }
  // 编辑表单页
  async edit() {
    this.ctx.body = '编辑表单页'

  }
  // 更新逻辑 put
  async update() {
    this.ctx.body = '更新逻辑'

  }
  // 删除逻辑 delete
  async destroy() {
    this.ctx.body = '删除逻辑'

  }
}

module.exports = PostController;
