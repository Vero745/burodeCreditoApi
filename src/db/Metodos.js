const { create, read, update, Delete } = require("../js/Metodo");

module.exports.create = (cnx, req, res) => {
    const data = req.body;
    if (Object.entries(data).length!==0) {
        create(data, cnx, (err, response) => {
            if (err) res.status(500).json({ message: err.message })
            else res.status(200).json(response)
        })
    } else {
        res.status(500).json({
            message: "Invalid parameters from the request",
        });
    }
};
module.exports.read = (cnx, req, res) => {
    read(cnx,(err, response) => {
        if (err) res.status(500).json({ message: err.message })
        else res.status(200).json(response)
    })
};
module.exports.update = (cnx, req, res) => {
    const id = req.params.id;
    const data = req.body;
    if (Object.entries(data).length!==0) {
        update(id,data,cnx,(err, response) => {
            if (err) res.status(500).json({ message: err.message })
            else res.status(200).json(response)
        })
    } else {
        res.status(500).json({
            message: "Invalid parameters from the request",
        });
    }
};
module.exports.Delete = (cnx, req, res) => {
    const id = req.params.id;
    Delete(id,cnx,(err, response) => {
        if (err) res.status(500).json({ message: err.message })
        else res.status(200).json(response)
    })
};
