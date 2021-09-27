/**
 * 用户业务操作
 */ 

const userModel = require('../models/user-info')

const user = {
  /**
   * 创建用户
   * @param {object} user 用户信息
   * @return {object}     创建结果
   */
  async create(user) {
    let result = await userModel.create(user)
    return result
  },

  /**
   * 登录业务操作
   * @param {object} formData 登录表单信息
   * @return {object}         登录业务操作结果
   */
  async signIn(formData) {
    let resultData = await userModel.getOneByUserNameAndPassword({
      'password':formData.password,
      'name': formData.userName
    })
    return resultData
  }

}

module.exports = user