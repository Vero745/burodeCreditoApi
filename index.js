require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const usuarios = require('./src/routes/Usuarios');
const metodos = require('./src/routes/MetodosPago');
const tarjetas = require('./src/routes/Tarjetas');
const buroCredito = require('./src/routes/BuroCredito');


app.use(cors());
app.use(express.json());
app.listen(process.env.PORT, () => console.log(`server runing at http://localhost:${process.env.PORT}`));




// Rutas de usuario
// login y registro
app.use("/user",usuarios);

//  Rutas para los metodos de pago (paypal, etc.).
app.use("/metodos",metodos);

// tarjeta de Codeway
app.use("/tarjetas",tarjetas);


// ingreso de los datos de Moffin
app.use("/buro-credito",buroCredito);