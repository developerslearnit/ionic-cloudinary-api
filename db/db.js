var mongoose = require('mongoose');
var config = require('../config/settings');

mongoose.connect(config.dbUrl);

mongoose.connection.on('connected', function () {
	console.log('Mongoose connected to ' + config.dbUrl);
});
mongoose.connection.on('error',function (err) {
	console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
	console.log('Mongoose disconnected');
});
process.on('SIGINT', function() {
	mongoose.connection.close(function () {
		console.log('Mongoose disconnected through app termination');
		process.exit(0);
	});
});