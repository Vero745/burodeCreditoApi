const metodos = require('express').Router();
const Metodos = require('../database/MetodosPago');
const connectionDB = require('../database/dbConnection') 


metodos.get('/',(req,res)=>Metodos.leerMetodo(connectionDB,(err,response)=>{
    if (err) res.status(500).json({
        error : err.message || 'Ocurrio un problema al leer los metodos de pago, intenta de nuevo o espera si el error continua'
    });
    else res.status(200).json(response);
}));



module.exports = metodos;