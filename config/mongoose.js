const mongoose = require('mongoose');
const {URI} = process.env.MongoDB;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://sergio:porlamadre3@cluster0-ndbon.mongodb.net/unicorn?retryWrites=true', { useNewUrlParser: true });
//mongoose.connect(`mongodb://${URI}`, { useNewUrlParser: true });

module.exports = mongoose;