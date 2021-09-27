const dbUtils = require('../utils/db-util')
const { query } = require("../../init/util/db")

const user = {
  /**
   * 数据库创建用户
   * @param {ibject} model 用户数据模型
   * @return {object}  mysql执行结果
   */
  async create (model) {
    let result = await dbUtils.insertData('user', model)
    return result
  },

  /**
   * 根据用户名和密码查找用户
   * @param {object} options 用户名密码对象
   * @return {object|null}   查找结果
   */
  async getOneByUserNameAndPassword (options) {
    console.log(options)
    let _sql = `
      SELECT * from user 
      where password="${options.password}" and name="${options.name}"
      limt 1`
    let result =  await query(_sql)
    if( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  }
}

module.exports = user