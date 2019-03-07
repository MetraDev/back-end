const router = require('express').Router();
const RegUser = require('../Models/resgisterUser');
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    RegUser.find({}).then(data => {
        // req.user // tenemos acceso a la informacin de quien ha hecho la peticion
        res.send({data});
    });
});

router.get('/:id', (req, res) => {
    RegUser.findById(req.params.id).then(data => {
        if(!data) return res.status(404).send(`No existe un rol con _id: ${req.params.id}`)

        res.send(data);
    })
});
router.delete('/:id', (req,res)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(404).send(`No existe _id`)


    RegUser.findByIdAndDelete(req.params.id).then(data=>{
        if(!data) return res.status(404).send(`No existe un rol con _id: ${req.params.id}`)
        res.send(data)
    })


})

router.put('/:id', (req,res)=>{
    if(req.body.name || req.body.isDemium ){
        RegUser.findByIdAndUpdate(req.params.id,{$set:{ ...req.body}},
            {new:true, overwrite:true, runValidator:true} )
            .then(data=> res.send(data))}

})



router.post('/', (req, res) => {
    if(!req.body) return res.status(400).send(`bad`);

    RegUser.findOne({
        email:req.body.email,
        password:req.body.password

    }).then(user => {

        user.generateAuthToken().then(token => {
            // console.log(JSON.stringify(user.toObject(), undefined, 2))

            res.send({accessToken: token});
        }).catch( err => res.status(404)('no coincide',err))
    })
});


module.exports= router;