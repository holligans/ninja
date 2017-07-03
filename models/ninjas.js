const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating Ninja schema 
 const NinjaSchema = new Schema({
 	name:{
 		type:String,
 		required:[true, "menssage in case of name missed"]
 	},
 	rank:{
 		type:String
 	},
 	available:{
 		type:Boolean,
 		default: false
 	}
 	// add in geo location
 });

// Creating Ninja Model
const Ninja = mongoose.model('ninja', NinjaSchema);

// exporting Ninja module
module.exports = Ninja;