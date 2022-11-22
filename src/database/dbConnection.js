const mysql = require('mysql');
const { dbConnectionObject } = require('../utils/const');


module.exports.createConnection = ()=>{
    return mysql.createConnection(dbConnectionObject);
}