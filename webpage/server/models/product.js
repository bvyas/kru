var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
	name: String,
	url: String,
	description: String,
	quantity: Number,
	date: Date
})
mongoose.model('Shop', OrderSchema)