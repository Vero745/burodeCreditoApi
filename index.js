const express = require('express');
const cors = require('cors');
const { login, signup } = require('./src/routes/users');
const { createConnection } = require('./src/database/dbConnection');

const app = express();

const PORT = 3000;


app.use(cors());
app.use(express.json());
app.listen(PORT, () => console.log(`server runing at http://localhost:${PORT}`));

const connectionDB = createConnection();
connectionDB.connect((err)=>{
    if (err) throw err;
    console.log('Conectado a la base de datos');
})

app.post('/user/login', (req,res)=>login(req,res,connectionDB));
app.post('/user/signup', (req,res)=>signup(req,res,connectionDB));