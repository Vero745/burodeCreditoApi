const { login, create, update, read, Delete } = require("../js/User");

module.exports.login = (req, res, cnx) => {
    const { user, password } = req.body;
    if (user && password) {
        login(user, password, cnx, (err, response) => {
            if (err) res.status(500).json({ message: err.message });
            else res.status(200).json(response);
        });
    } else {
        res.status(500).json({ message: "Error, no body in the request" });
    }
};

module.exports.signup = (req, res, cnx) => {
    const obj = req.body;
    if (Object.entries(obj).length !== 0) {
        create(obj, cnx, (err, response) => {
            if (err) res.status(500).json({ message: err.message });
            else res.status(200).json(response);
        });
    } else {
        res.status(500).json({ message: "Error, no body in the request" });
    }
};

module.exports.update = (req, res, cnx) => {
    const obj = req.body;
    const id = req.params.id;
    if (Object.entries(obj).length !== 0) {
        update(id, obj, cnx, (err, response) => {
            if (err) res.status(500).json({ message: err.message });
            else res.status(200).json(response);
        });
    } else {
        res.status(500).json({ message: "Error, no body in the request" });
    }
};
module.exports.read = (req, res, cnx) => {
    const rfc = req.params.rfc;
    read(rfc, cnx, (err, response) => {
        if (err) res.status(500).json({ message: err.message });
        else res.status(200).json(response);
    });
};

module.exports.Delete = (req, res, cnx) => {
    const id = req.params.id;
    Delete(id, cnx, (err, response) => {
        if (err) res.status(500).json({ message: err.message });
        else res.status(200).json(response);
    });
};
