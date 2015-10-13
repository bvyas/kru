var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
	name: String,
	url: String,
})
mongoose.model('Shop', OrderSchema)