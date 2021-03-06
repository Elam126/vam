const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');


mongoose.Promise = global.Promise;
mongoose.connect(config.uri,{ useNewUrlParser: true }, (err) => {
    if(err){
         console.log('Database connectivity issue : ', err);
    }else{
         console.log('Connected to Database : '+ config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/client'))

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(8080, () => {
    console.log('Working on Port 8080');
 });