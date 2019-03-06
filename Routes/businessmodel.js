
const mongoose = require('mongoose');
const Business  = require('../Models/businessmodel');
const router = require('express').Router();
const authorization = require('../middlewares/authorization');




router.get('/',authorization,(req, res) => {
    Business.find({}).then(data=> {

        // req.user // tenemos acceso a la informacin de quien ha hecho la peticion
            //respuesta ={data:[...respuesta]}



        res.json({data});
    });
});


router.get('/:id', (req, res) => {
    Business.findById(req.params.id).then(data => {
        if(!data) return res.status(404).send(`No existe un rol con _id: ${req.params.id}`)

        res.send(data);
    })
});




module.exports = router