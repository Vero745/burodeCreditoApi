const metodos = require("express").Router();
const { create, Delete, update, read } = require("../db/Metodos");
const { conexion } = require("../configs/database/init");

metodos.get("/", (req, res) => read(conexion, req, res));
metodos.post("/", (req, res) => create(conexion, req, res));
metodos.patch("/:id", (req, res) => update(conexion, req, res));
metodos.delete("/:id", (req, res) => Delete(conexion, req, res));

module.exports = metodos;
