const { conexion } = require('../configs/database/init');
const { create, read, update, Delete } = require('../db/Tarjetas');

const tarjetas = require('express').Router();



tarjetas.get('/',(req,res)=>read(conexion, req, res));
tarjetas.post('/',(req,res)=>create(conexion, req, res));
tarjetas.patch('/:id',(req,res)=>update(conexion, req, res))
tarjetas.delete('/:id',(req,res)=>Delete(conexion, req, res))



module.exports = tarjetas