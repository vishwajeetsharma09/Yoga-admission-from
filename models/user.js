var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// This is the user model based upon our requirements

userSchema = new Schema( {
	
	unique_id: Number,
	email: String,
	username: String,
	password: String,
	passwordConf: String,
	batch: String,
	payment: Number,
}),
User = mongoose.model('User', userSchema);

module.exports = User;