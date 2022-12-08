const tarjetas = require('express').Router();
const Tarjetas = require('../database/Tarjetas');



tarjetas.get('/',Tarjetas.create);
tarjetas.post('/',Tarjetas.read);
tarjetas.patch('/:id',Tarjetas.update)
tarjetas.delete('/:id',Tarjetas.delete)