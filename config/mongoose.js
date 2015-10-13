var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://localhost/orders')
//mongoose.connect('mongodb://localhost/shops')
var path = require("path");
var models_path = path.join(__dirname, '../server/models');

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js')>=0){
		require(models_path + '/' + file);
	}
})