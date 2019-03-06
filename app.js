
require('./config/environment');
require('./config/mongoose');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');


const PORT = process.env.PORT;
const express = require('express')
const app = express();
const bodyParser= require('body-parser')
const cors = require('cors')



app.use(cors())
app.use(bodyParser.json())

app.use('/user', require ('./Routes/users.js'))
app.use('/role', require ('./Routes/role.js'))




// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(PORT, ()=> console.log(`Servidor escuchando en el puerto ${PORT}`))

module.exports = app;