const mongoose = require('mongoose');


const TeamSchema = mongoose.Schema({
    name:
        {type:String,
            required: true,

        },
    cityId:{
        type:String
    },
    users:[Object]


});

const Team = mongoose.model('team', TeamSchema);

module.exports = Team;