const path = require('path')
const Koa = require('koa')

const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const koaLogger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const config = require('../conifg')
const routers = require('./routers/index')

const app = new Koa()

// session存储配置
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST
}

// 存放sessionId的cookie配置
let cookie = {
  maxAge: '',
  expires: '',
  path: '',
  domain: '',
  httpOnly: '',
  overwrite: '',
  secure: '',
  sameSite: '',
  signed: ''
}


//配置session中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)  //session 持久化
}))

// 配置控制台日志中间件
app.use(koaLogger())

app.use(bodyParser())


app.use(routers.routes()).use(routers.allowedMethods())


app.listen(config.port)