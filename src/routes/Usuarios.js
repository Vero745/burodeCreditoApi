const usuario = require('express').Router();
const connectionDB = require('../database/dbConnection') 
const { login, signup } = require('./users');

usuario.post('/login', (req,res)=>login(req,res,connectionDB));

usuario.post('/signup', (req,res)=>signup(req,res,connectionDB));




module.exports = usuario;