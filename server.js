var express = require('express');
var app = express();
var port = 4200;
app.listen(process.env.PORT || port, function () { 
    console.log('Running REST HTTPS server on port: '+port);
});

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response){
    response.sendFile(path.resolve(__dirname, '/public', 'index.html'));
});





