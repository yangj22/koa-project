// const Koa = require('koa')
const mysql = require('mysql')
const config = require('../../conifg')

const pool = mysql.createPool({
  host:config.database.HOST,
  user     : config.database.USERNAME,
  password : config.database.PASSWORD,
  database : config.database.DATABASE,
  socketPath: '/tmp/mysql.sock',
})


let allServices = {
  /**
   * 连接数据库
   * @param {sql:sql语句}
   * @return {undefind}
  */
  query: function (sql,values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err,connection) {
        if(err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) =>{
            if(err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
  // findUser: function() {
  //   return allServices.query(`SELECT * FROM sys_config LIMIT 100;`)
  // }
}

module.exports = allServices

// app.