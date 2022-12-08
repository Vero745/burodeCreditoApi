const mysql = require('mysql');
const { dbConnectionObject } = require('../utils/const');


const connection = mysql.createConnection(dbConnectionObject);

connection.connect((err)=>{
if (err) throw err;
console.log('Conectado a la base de datos');
})

module.exports =  connection;