var customer = require('../server/controllers/customers.js');
var order = require('../server/controllers/orders.js');
var product = require('../server/controllers/products.js');
var bodyParser = require("body-parser");
module.exports = function(app){
	app.get('/customers', function(req, res){
		customer.show(req, res);
	})
	app.post('/customers', function(req, res){
		customer.add(req, res);
	})
	app.post('/remove_customer', function(req, res){
		customer.remove(req, res);
	})
	app.get('/orders', function(req, res){
		//console.log('reached routes')
		order.show_orders(req, res);
	})
	app.post('/orders', function(req, res){
		//console.log(req.body)
		order.add(req, res);
	})
	app.get('/products', function(req, res){
		//console.log('reached routes')
		product.show_products(req, res);
	})
	app.post('/products', function(req, res){
		//console.log(req.body)
		product.add_products(req, res);
	})
}