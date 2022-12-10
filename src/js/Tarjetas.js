const mysql = require("mysql");
const { Query } = require("../utils/constants");

module.exports.create = (cnx, data, callback) => {
    const query = mysql.format(
        `INSERT INTO tarjetacodeway VALUES (DEFAULT,?,?,?,?,?)`,
        Object.values(data)
    );
    Query(cnx, query, (err, results) => {
        if (err) callback(err, null);
        else callback(null, results);
    });
};
module.exports.read = (cnx, callback) => {
    Query(cnx, "SELECT * FROM tarjetacodeway", (err, results) => {
        if (err) callback(err, null);
        else callback(null, results);
    });
};
module.exports.update = (cnx, id, data, callback) => {
    const query = mysql.format(
        `UPDATE tarjetacodeway SET ? WHERE idTarjeta = ${id}`,
        data
    );
    Query(cnx, query, (err, results) => {
        if (err) callback(err, null);
        else callback(null, results);
    });
};
module.exports.Delete = (cnx, id, callback) => {
    Query(
        cnx,
        `DELETE FROM tarjetacodeway WHERE idTarjeta = ${id}`,
        (err, results) => {
            if (err) callback(err, null);
            else callback(null, results);
        }
    );
};
