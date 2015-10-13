var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = {
	show: function(req, res){
		Customer.find({}, function(err, results){
			if(err){
				console.log(err);
			}
			console.log(results);
			res.send(JSON.stringify(results));
		})
	},
	add: function(req, res){
		console.log('in controller', req.body);
		var new_customer = new Customer({name: req.body.name, date: req.body.date});
		new_customer.save(function(err, result){
			if(err){
				console.log('something wrong');
			}
			else{
				res.json(result);
			}
		})
	},
	remove: function(req,res)
	{
		// console.log('in controller', req.body);
		// console.log(req.body._id);
		Customer.remove({_id: req.body._id}, function(err, data){
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