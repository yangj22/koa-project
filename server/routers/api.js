/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userInfoController = require('../controllers/user-info')

const routers = router
  .post('/user/signUp.json', userInfoController.singUp)
  .post('/user/signIn.json', userInfoController.signIn)

module.exports = routers