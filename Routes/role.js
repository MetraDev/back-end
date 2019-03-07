const router = require('express').Router();
const Role = require('../Models/role');
const mongoose = require('mongoose');

const authorization = require('../middlewares/authorization');

router.get('/', authorization, (req, res) => {
    Role.find().then(data => {


       //res.setHeader('Content-Type',' application/json');
        res.json({data});


    });
});

router.get('/:id', (req, res) => {
    Role.findById(req.params.id).then(data => {
        if(!data) return res.status(404).send(`No existe un rol con _id: ${req.params.id}`)

        res.send(data);
    })
});



module.exports= router;