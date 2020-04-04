var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');

var chatRouter = require('./routes/chat');

var app = express();

mongoose.connect('mongodb://localhost/chatdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('successfully connected with mongodb')
}).catch((err) => {
    console.error('Database error', err);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/api/chats', chatRouter);

module.exports = app;
