

const mongoose = require('mongoose');


const citySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    address: {
        type: String,
        required: false


    },
    telephone: {
        type: String,
        required: true,

    },
    users:[Object]
});

const City = mongoose.model('city', citySchema);

module.exports = City
