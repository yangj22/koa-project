const fs = require('fs')
const allServices  = require('./util/db')
const getSqlContentMap = require('./util/get-sql-content-map')

let sqlContentMap = getSqlContentMap()

const createAllTable = async () => {
  for(let key in sqlContentMap) {
    let sqlShell = sqlContentMap[key]
    let sqlShellList = sqlShell.split(';')
    
    for(let [i,shell] of sqlShellList.entries()){
      if ( shell.trim() ) {
        let result = await allServices.query( shell )
      }
    }
  }
}

createAllTable()