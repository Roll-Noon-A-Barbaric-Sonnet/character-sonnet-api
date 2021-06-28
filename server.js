'use strict'

const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const jwksClient = require('jwks-rsa');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT

const routeHandlers = require('./routeHandlers');

// const client = jwksClient({
//   jwksUri: 'https://devthingy.us.auth0.com/.well-known/jwks.json'
// })

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongo Online')
});

app.get('*', routeHandlers.test)

app.listen(PORT, () => {console.log(`listening on port ${PORT}`);});