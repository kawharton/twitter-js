var express = require('express');
var swig = require('swig');
var routes = require('./routes/');


var app = express();

//middleware
app.use(function (req, res, next){
	console.log(req.method + " " + req.originalUrl);
	next();
})


app.use(express.static(__dirname + '/public'));
app.use('/', routes);




// app.use(function (req, res, next){
// 	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// res.render( 'index', {title: 'Hall of Fame', people: people} );
// })


// app.get('/', function(req, res) {
// 	res.send('Welcome!');
// })

// app.get('/news', function(req, res) {
// 	res.send('Welcome to news!');
// })

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false });



// swig.renderFile(__dirname + '/views/index.html', data, function (err, output) {
//     console.log(output);
// });



app.listen(3000);
console.log("server listening")