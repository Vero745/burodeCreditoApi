const { conexion } = require("../configs/database/init");
const { login,signup, update, read, Delete } = require("../db/User");
const usuario = require("express").Router();

usuario.post("/login", (req, res) => login(req, res, conexion));
usuario.post("/signup", (req, res) => signup(req, res, conexion));
usuario.get("/:rfc", (req, res) => read(req, res, conexion));
usuario.patch("/:id", (req, res) => update(req, res, conexion));
usuario.delete("/:id", (req, res) => Delete(req, res, conexion));

module.exports = usuario;
