var express = require('express');
var session = require('express-session');
var mongoose= require('mongoose');
var bodyParser= require('body-parser');
var path = require('path');
const flash = require('express-flash');

var app= express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
    secret: 'pankoandtofu',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// mongoose.connect('mongodb://localhost/basic_mongoose');


// mongoose.Promise= global.Promise;
require('./server/config/routes')(app);



app.listen(8000, function() {
    console.log("listening on port 8000");
})

