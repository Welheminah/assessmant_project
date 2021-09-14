const express = require('express');
const exphbs = require('express-handlebars');
const pizza = require('./pizza');

const app = express();
const PORT = process.env.PORT || 3017;

const pizzaFunc = pizza();

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



app.get('/', function (req, res) {

	var small = pizzaFunc.orderSmall();
	var medium = pizzaFunc.orderMedium();
	var large = pizzaFunc.orderLarge();
	var total = pizzaFunc.totalCost();
	res.render('index', {

		small,
		medium,
		large,
		total

	});
	// console.log(small)
});




app.post('/quantityMedium', function (req, res) {

	pizzaFunc.updateTotalMedium()
	res.redirect('/')
});

app.post('/quantitySmall', function (req, res) {

	pizzaFunc.updateTotalSmall()
	res.redirect('/')
});

app.post('/quantityLarge', function (req, res) {

	pizzaFunc.updateTotalLarge()

	res.redirect('/')
});


app.get('/minusSmall', function (req, res) {

	var minusS = pizzaFunc.oneDownSmall()
	res.render('index', {
		minusS
	});
	console.log(minusS)

});

app.get('/minusMedium', function (req, res) {

	var minusM = pizzaFunc.oneDownMedium()

	res.render('index', {
		minusM
	});

});

app.get('/minusLarge', function (req, res) {

	var minusL = pizzaFunc.oneDownLarge()
	res.render('index', {
		minusL
	});

});

// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function () {
	console.log(`App started on port ${PORT}`)
});