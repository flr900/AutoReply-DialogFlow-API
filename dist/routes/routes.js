"use strict";
var express = require('express');
var routes = express.Router();
routes.post('/', function (req, res) {
    console.log(req);
    var data = req.body;
    return res.json({ data: [
            {
                message: 'received'
            }
        ]
    });
});
module.exports = routes;
