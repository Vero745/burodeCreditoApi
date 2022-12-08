const cnx = require("../database/dbConnection");

module.exports.create = (req, res) => {
  const data = req.body;
  cnx.query(
    `INSERT INTO tarjetacodeway VALUES (DEFAULT,
        '${data.noTarjeta}',
        '${data.noCuenta}',
        '${data.claveInterbancaria}',
        '${data.nombresPersona}',
        '${data.ApellidosPersona}')`,
    (err, response) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json(response);
      }
    }
  );
};
module.exports.read = (req, res) => {
  cnx.query("SELECT * FROM tarjetacodeway", (err, response) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).json(response);
    }
  });
};
module.exports.update = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  cnx.query(
    `UPDATE tarjetacodeway SET noTarjeta='${data.noTarjeta}',
  noCuenta = '${data.noCuenta}',
  claveInterbancaria = '${data.claveInterbancaria}',
  nombresPersona = '${data.nombresPersona}',
  ApellidosPersonas = ${data.ApellidosPersona} 
  WHERE idTarjeta = ${id}`,
    (err, response) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json(response);
      }
    }
  );
};
module.exports.delete = (req, res) => {
  const id = req.params.id;

  cnx.query(
    `DELETE FROM tarjetacodeway WHERE idTarjeta = ${id}`,
    (err, response) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json(response);
      }
    }
  );
};
