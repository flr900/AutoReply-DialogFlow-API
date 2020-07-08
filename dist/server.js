"use strict";
var express = require('express');
var helmet = require('helmet');
var cors = require('cors');
var morgan = require('morgan');
var routes = require('./routes/routes.js');
var app = express();
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(process.env.PORT || 3333, function () {
    console.log('Listening');
});
