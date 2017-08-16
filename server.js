var http = require("http");
var https = require("https");
var express = require('express');

var tls = require('tls');
var fs = require('fs');
var cmd=require('node-cmd');

var request = require("request");
var bodyParser = require('body-parser');


var bodyParser = require('body-parser');


var app = express();
var port = 4200;
app.listen(process.env.PORT || port, function () { 
    console.log('Running REST HTTPS server on port: '+port);
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response){
    response.sendFile(path.resolve(__dirname, '/public', 'index.html'));
});





