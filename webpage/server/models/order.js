var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
	name: String,
 	product: String,
	flag: String,
 	date: {type: Date, default: Date.now}
})
mongoose.model('Order', OrderSchema)
