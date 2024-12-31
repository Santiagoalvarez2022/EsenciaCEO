const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();


router.post('/', async(req,res)=>{
    const {nickname, password} = req.body
    console.log('datos req.body ,  ==>', nickname, password);
        
    try {
        

    res.status(200).json({ message: 'Login exitoso' });

    } catch (error) {
        res.status(400).json(error.message )
    }
});

module.exports = router