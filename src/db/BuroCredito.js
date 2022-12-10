const { create, read } = require("../js/BuroCredito");

module.exports.create = (cnx, req, res) => {
    const id = req.params.id;
    const data = req.body;
    if (Object.entries(data).length !== 0) {
        create(id, data, cnx, (err, response) => {
            if (err) res.status(500).json({ message: err.message });
            else res.status(200).json(response);
        });
    } else {
        res.status(500).json({
            message: "Invalid parameters from the request",
        });
    }
};

module.exports.read = (cnx, req, res) => {
    const id = req.params.id;
    read(id, cnx, (err, response) => {
        if (err) res.status(500).json({ message: err.message });
        else res.status(200).json(response);
    });
};
