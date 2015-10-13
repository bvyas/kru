var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
	name: String,
	date: {type: Date, default: Date.now}
})
mongoose.model('Customer', OrderSchema)