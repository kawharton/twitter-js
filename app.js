var express = require('express');

var app = express();

app.use(function (req, res, next){
	console.log(req.method + " " + req.originalUrl);
	next();
})

app.get('/', function(req, res) {
	res.send('Welcome!');
})

app.get('/news', function(req, res) {
	res.send('Welcome to news!');
})





app.listen(3000);
console.log("server listening")