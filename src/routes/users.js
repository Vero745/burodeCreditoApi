const { LoginDB, RegistroDB } = require("../database/AuthDb");


module.exports.login = (req, res,cnx) => {
    const { user, password } = req.body;
    console.log(req.body)
    LoginDB(user,password,cnx,(response=> res.json(response)));
}


module.exports.signup = (req, res, cnx) => {
    const obj = req.body

    try {
        RegistroDB(obj,cnx, response => res.json(response))
    } catch (error) {
        res.status(500).send(error);
    }
}


// verocruzosorio6