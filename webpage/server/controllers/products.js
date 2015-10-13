var mongoose = require('mongoose');
 var Order = mongoose.model('Order');
 var Product = mongoose.model('Shop');
 var current_date = new Date();

 module.exports = {
 	show_products: function(req, res){
 		console.log('reached controller')
 		Product.find({}, function(err, results){
 			if(err){
 				console.log(err);
 			}
 			console.log(results);
 			res.json(results);
 		})
 	},
 	add_products: function(req, res){
 		var d = new Date();
 		console.log('in controller', req.body);
 		var new_product = new Product({name: req.body.name, url: req.body.url, description: req.body.description, quantity: req.body.quantity, date:d});
 		console.log(new_product);
 		new_product.save(function(err, result){
 			if(err){
				console.log('something wrong');
			}
			else{
				console.log('inserted in db')
				res.json(result);
			}
 		})
	 },
 }