"use strict";

const express = require('express')
    , path = require('path')
    , port = process.env.PORT || 3000
    , app = express();

app.use(express.static(path.join(__dirname, './')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});