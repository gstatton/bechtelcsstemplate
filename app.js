var express = require('express');

var app = express.createServer();

app.use(express.static(__dirname + '/public'));
app.engine('jade', require('jade').__express);
app.get('/', function(req, res) {

    res.render('index.html');
});


// spin up server
app.listen(8080);
