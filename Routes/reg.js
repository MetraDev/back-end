const router = require('express').Router();
const RegUser = require('../Models/resgisterUser');
const mongoose = require('mongoose');



router.get('/', (req, res) => {
    RegUser.find().then(data => {


        //res.setHeader('Content-Type',' application/json');
        res.json({data});


    });
});

router.post('/',(req,res)=>{

    if(!req.body )
        return res.status(400).send(`El cuerpo esta vacio`)
    const data = req.body;
    new RegUser({...data}).save().then(data=>{
        res.send(data);
    })
})


module.exports= router;