const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan')

mongoose.connect('mongodb://127.0.0.1:27017/my-blog', {useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('ok')
});

app.use('/api/users', require('./routes/users'));

module.exports = app;