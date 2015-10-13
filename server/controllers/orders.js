var mongoose = require('mongoose');
 var Order = mongoose.model('Order');
 var Product = mongoose.model('Shop');
 module.exports = {
 	show_orders: function(req, res){
 		console.log('reached controller')
 		Order.find({}, function(err, results){
 			if(err){
 				console.log(err);
 			}
 			console.log(results);
 			res.json(results);
 		})
 	},
 	add: function(req, res){
 		console.log('in controller your order', req.body);
 		var new_order = new Order({name: req.body.name, product: req.body.product});
 		Product.findOne({name:req.body.product}, function(err, results2)
		  	  {
		  		  var quantity_left = results2.quantity -req.body.quantity;
		  		  
		  		  if(results2.quantity <=0 || (req.body.quantity >quantity_left) || req.body.quantity ==0)
		  		  {
		  		  	console.log("You can't order more than out of stock volume")
		  		  }
		  		  else{
				  new_order.save(function(err, results) {
					  if(err) {
						  console.log(err);
					  } else {
						  
							  	Product.update({name: req.body.product}, {quantity: quantity_left}, function(err, results3){
								  if(err){
									  console.log(err)
								  }
								  else{
									  res.json(results3);
								  }
							  })

							  }						  
						  })

					  }
				  })
 	},
 	remove: function(req,res)
	{
		// console.log('in controller', req.body);
		// console.log(req.body._id);
		Order.remove({_id: req.body._id}, function(err, data){
			if(err)
			{
				console.log('failed to remoce customer');
			}
			else
			{
				res.json(data);
			}
		})
	}
 
 }
 


