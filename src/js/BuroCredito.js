const mysql = require("mysql");
const { Query } = require("../utils/constants");

module.exports.create = (id, data, cnx, callback) => {
    const query = mysql.format(
        `INSERT INTO reporte VALUE (DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        Object.values(data)
    );
    Query(cnx, query, (err, results) => {
        if (err) callback(err, null);
        else {
            Query(
                cnx,
                `INSERT INTO reportepersona VALUE (DEFAULT,${results.insertId},'${id}',NOW())`,
                (err, result) => {
                    if (err) callback(err, null);
                    else callback(null, result);
                }
            );
        }
    });
};

module.exports.read = (id, cnx, callback) => {
    const query = `SELECT
	reporte.*
FROM
	reporte
	INNER JOIN
	reportepersona
	ON 
		reporte.idReporte = reportepersona.idReporte
WHERE
	reportepersona.idPersona = '${id}'
ORDER BY
	reportepersona.fecha DESC
LIMIT 1`;
    Query(cnx, query, (err, results) => {
        if (err) callback(err, null);
        else callback(null, results);
    });
};
