const { v4: uuid } = require("uuid");
const mysql = require("mysql");
const { Query } = require("../utils/constants");

module.exports.create = (data, cnx, callback) => {
    const id = uuid();
    const query = mysql.format(
        `INSERT INTO tipopago VALUES('${id}',?,1)`,
        Object.values(data)
    );
    Query(cnx, query, (err, results) => {
        if (err) callback(err, null);
        else callback(null, results);
    });
};

module.exports.read = (cnx, callback) => {
    Query(cnx,'SELECT * FROM tipopago' ,(err, results) => {
        if (err) callback(err, null);
        else callback(null, results);
    });
};

module.exports.update = (id, data, cnx, callback) => {
    const query = mysql.format(
        `UPDATE tipopago SET ? WHERE idTipoPago = '${id}'`,
        data
    );
    Query(cnx, query, (err, results) => {
        if (err) callback(err, null);
        else callback(null, results);
    });
};

module.exports.Delete = (id, cnx, callback) => {
    Query(cnx, `DELETE FROM tipopago WHERE idTipoPago='${id}'`, (err, results) => {
        if (err) callback(err, null);
        else callback(null, results);
    })
};
