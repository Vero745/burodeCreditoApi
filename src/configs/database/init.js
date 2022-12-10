const mysql = require("mysql");

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

conexion.connect((err) => {
    if (err)
        console.log(
            "ocurrio un error al conectarse a la base de datos, ",
            err.message || null
        );
    else console.log("Conexion a la base de datos establecida...");
});


module.exports = {conexion}