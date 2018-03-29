"use strict";

const express = require('express')
    , path = require('path')
    , app = express();

app.use(express.static(path.join(__dirname, './')));
console.log(path.join(__dirname, './'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});