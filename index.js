const express = require('express');
const exphbs = require('express-handlebars');
const pizzaFactory = require('./pizza');

const app = express();
const PORT = process.env.PORT || 3017;

let pizzaFunc = pizzaFactory;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

var smallTotal = 0;
var mediumTotal = 0;
var largeTotal = 0;

app.get('/', function (req, res) {
	// console.log(small)
	res.render('index', {
		
		small: pizzaFunc.orderSmall,
		medium: pizzaFunc.orderMedium,
		large: pizzaFunc.orderLarge,
		
	});
	
});

// app.post('/console.log(small)', function (req, res) {
	
// 		mediumPizza: req.body.medium,
// 	res.redirect('/')
// });

app.post('/quantitySmall', function (req, res) {
	var order = {
		smallPizza: req.body.small,

	}
	res.redirect('/')
});

// app.post('/quantityLarge', function (req, res) {
// 	var order = {
// 		mediumPizza: req.body.medium,
// 		smallPizza: req.body.small,
// 		largePizza: req.body.large

// 	}
// 	res.redirect('/')
// });

// app.post('/quantityLarge', function (req, res) {
// 	var order = {
// 		mediumPizza: req.body.medium,
// 		smallPizza: req.body.small,
// 		largePizza: req.body.large

// 	}
// 	res.redirect('/')
// });


// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function () {
	console.log(`App started on port ${PORT}`)
});