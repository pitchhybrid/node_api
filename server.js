const express = require('express'); //express-instance
const mongoose = require('mongoose'); //mongodb ORM
const cors = require('cors');   //CORS for EXECUTE in others servers
const requireDir = require('require-dir');
const dotenv = require('dotenv').load();

const env = process.env

const app = express(); // Init app
app.use(express.json());
app.use(cors())
//DB
mongoose.connect(
    env.DB_HOST,
    { useNewUrlParser:true });

requireDir('./src/models');

app.use('/api',require('./src/routes'));

app.listen(env.API_PORT);