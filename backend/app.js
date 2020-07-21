const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const keys = require('./config/keys');

const catagoryAdmin = require('./routes/category');
const indexRoute = require('./routes/index');
const postAdmin = require('./routes/post');

const mongoose = require('mongoose');



const app = express();

// CONNECTING TO DATABASE
mongoose.connect(keys.MongoURI);
const db = mongoose.connection;
db.once('open', ()=>{
    console.log("Mongo db is been connected");
});
db.on('error',()=>{
    console.error("Faield to connect db");
})


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRoute);
app.use('/admin', catagoryAdmin);
app.use('/admin', postAdmin);



module.exports = app;
