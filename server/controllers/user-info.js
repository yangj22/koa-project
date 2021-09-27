const userInfoService = require('../services/user-info')

module.exports = {
  /**
   * 注册操作
   * @param {object} ctx 上下文对象 
   */ 
  async singUp(ctx) {
    let formData = ctx.request.body;
    let result = {
      sucess: false,
      message: '',
      data: null
    }

    let useResult = await userInfoService.create({
      email: formData.email,
      password: formData.password,
      name:formData.userName,
      create_time: new Date().getTime(),
      level: 1
    })

    ctx.body = result
  },

  /**
   * 登录操作
   * @param {object} ctx 上下文对象
   */
  async signIn (ctx) {
    let formData = ctx.request.body
    let result = {
      sucess: false,
      message: '',
      data: null,
      code: ''
    }

    let userResult = await userInfoService.signIn( formData )
    console.log(userResult)
    ctx.body = result
  }
}