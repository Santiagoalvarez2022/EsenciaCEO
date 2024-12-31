require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();//CREE UNA INSTANCIA DE EXPRESS, QUIERE DECIR QUE TENFGO ACCESO A TODOS SUS METODOS 


app.use(express.json());


app.use(cors({
    origin: 'http://localhost:5173',  // Reemplaza con el origen de tu cliente
    credentials: true  // Permite el envío de credenciales como cookies
  }));

app.listen(3001,()=>{
    console.log('server online')
})
  