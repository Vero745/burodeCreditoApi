module.exports.leerMetodo = (conexion,callback)=>{
    conexion.query('Select * from tipopago',(err,res)=>{
        if (err) callback(err,null);
        else callback(null,res);
    })
}   