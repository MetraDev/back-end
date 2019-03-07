const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    surname: {
        type: String,
        required: true,

    },
    telephone: {
    type:String

    },
    roleId:{
        type:String,
    }


});
/*
UserSchema.pre('save', function (next) {
    console.log('Se ha guardado')

    const user = this;
    if(user.isModified('pasword')){
        bcrypt.genSalt(10, (err,salt )=>{
            bcrypt.hash(user.password, salt, (err,hash)=>{
                console.log(user.password.salt)
                console.log(hash)
                bcrypt.compare(user.password, hash ,(err, res)=>{
                    if(!res ) throw  new Error (err)
                    user.password = hash;
                    next();
                })

            })
        })

        console.log('La pass ha cambiado')
    }else {
        console.log('La pass no  ha cambiado')
        next();
    }

})*/

const UserModel = mongoose.model('user', UserSchema);
module.exports = { UserSchema, UserModel };