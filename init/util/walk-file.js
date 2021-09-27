const fs = require('fs')

const walkFile = function (pathResolve, mime) {
  let files = fs.readdirSync( pathResolve )
  const fileList = {}
  files.forEach((item)=>{
    fileList[item] = pathResolve + item
  })
  return fileList
}

module.exports = walkFile