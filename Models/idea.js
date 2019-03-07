const mongoose = require('mongoose');


const IdeaSchema = mongoose.Schema({
    name:
        {type:String,
            required: true,


        },
    businessModelId:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    teamId:{
        required:false,
        type:String
    }
});

const Idea = mongoose.model('idea', IdeaSchema);
module.exports = Idea;