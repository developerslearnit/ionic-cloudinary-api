var mongoose =require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
	title:{type:String},
	image_url:{ type:String,default:''},
	description:{ type:String},	
	created_at: {type:Date,default:Date.now}
});

module.exports = mongoose.model('Post', postSchema);