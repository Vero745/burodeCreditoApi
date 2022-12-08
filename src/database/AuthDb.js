const { v4: uuidv4 } = require('uuid');
const queryDB = (statement, connection, callback) => {
    connection.query(statement, (err, res) => {
        if (err){
            if  (err.errno === 1062) {
                console.log(err)
                
                callback({ err: 1062 })
            }
        } else {
            callback(res)
        }
    })
}




module.exports.LoginDB = (user, password, connection, callback) => {
    const query = `SELECT persona.idPersona, usuariorol.idRol
                    FROM 
                    persona INNER JOIN usuariorol
                    ON 
                    persona.idPersona = usuariorol.idPersona
                    WHERE
                    persona.user ='${user}' AND persona.password = '${password}'`
    queryDB(query, connection, callback);
}
module.exports.RegistroDB = (obj, connection, callback) => {
    const id = uuidv4();
    const query = `INSERT INTO persona
                    VALUES (
                        '${id}',
                        '${obj.name}',
                        '${obj.ap1}',
                        '${obj.ap2}',
                        '${obj.rfc}',
                        '${obj.direction}',
                        '${obj.city}',
                        '${obj.postalCode}',
                        '${obj.state}',
                        '${obj.region}',
                        '${obj.suburb}',
                        '${obj.user}',
                        '${obj.password}',
                        1,
                        '${obj.email}'
                        )`
    queryDB(query, connection, (res) => {
        if (res.err){
            callback({error:true})
        }else{
            queryDB(`INSERT INTO usuariorol VALUES (DEFAULT, '${id}',2)`, connection, callback)
        }
    }
    );

}



