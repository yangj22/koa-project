const { query } = require("../../init/util/db")

let createTabe = function(sql) {
  return query(sql, [])
}

let insertData = function( table, values ) {
  let _sql = "INSERT INTO ?? SET ?"
  return query( _sql, [ table, values ] )
}


module.exports = {
  createTabe,
  insertData
}