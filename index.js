const express = require('express');
const cors = require('cors');
const { createConnection } = require('./src/database/dbConnection');
const metodos = require('./src/routes/MetodosPago');
const app = express();
const usuarios = require('./src/routes/Usuarios')
const PORT = 3000;


app.use(cors());
app.use(express.json());
app.listen(PORT, () => console.log(`server runing at http://localhost:${PORT}`));


// Rutas de usuario
// login y registro
app.use("/user",usuarios);

// Rutas para los metodos de pago (paypal, etc.).
app.use("/metodos",metodos);

// tarjeta de Codeway
app.use("/tarjetas",metodos);


//ingreso de la base de datos de Moffin
app.use("/buro-credito",metodos);