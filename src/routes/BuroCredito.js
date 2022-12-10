const { conexion } = require('../configs/database/init');
const { create, read, update, Delete } = require('../db/BuroCredito');

const buroCredito = require('express').Router();



buroCredito.post ('/:id',(req,res)=>create(conexion, req, res))
buroCredito.get('/:id',(req,res)=>read(conexion, req, res))



module.exports = buroCredito;