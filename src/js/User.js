const { v4: uuid } = require("uuid");
const mysql = require("mysql");
const { Query } = require("../utils/constants");


module.exports.login = (user, password, cnx, callback) => {
    // funcion de la base de datos
    const query = `call login('${user}','${password}')`;

    Query(cnx, query, (err, results) => {
        if (err) callback(err, null);
        else {
            if (results[0]) {
                callback(null, results[0][0]);
            } else {
                callback({ message: "Incorrect user or password" }, null);
            }
        }
    });
};

module.exports.create = (data, cnx, callback) => {
    const id = uuid();
    const query = mysql.format(
        `call addUser(
        '${id}',?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        Object.values(data)
    );
    Query(cnx, query, (err, response) => {
        if (err) callback(err, null);
        else callback(null, response);
    });
};

module.exports.update = (id, data, cnx, callback) => {
    const query = mysql.format(
        `UPDATE persona SET ? WHERE idPersona = '${id}'`,
        data
    );
    Query(cnx, query, (err, response) => {
        if (err) callback(err, null);
        else callback(null, response);
    });
};
module.exports.read = (rfc, cnx, callback) => {
    Query(cnx, `SELECT * FROM persona WHERE rfc = '${rfc}'`, (err, response) => {
        if (err) callback(err, null);
        else callback(null, response);
    });
};

module.exports.Delete = (id, cnx, callback) => {
    Query(
        cnx,
        `DELETE FROM persona WHERE idPersona = '${id}'`,
        (err, response) => {
            if (err) callback(err, null);
            else callback(null, response);
        }
    );
};
