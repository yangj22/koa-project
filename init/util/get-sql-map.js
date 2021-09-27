// 获取sql文件
const fs = require('fs')
const walkFile = require('./walk-file')

function getSqlMap () {
  let basePath = __dirname

  let pathArr = basePath.split('\/')
  pathArr = pathArr.splice( 0, pathArr.length - 1 )
  basePath = pathArr.join('/') + '/sql/'
  return walkFile(basePath, 'sql')
}

module.exports = getSqlMap