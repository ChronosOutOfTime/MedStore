const mongoose = require('mongoose');


const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: {type: String, required: true},
	surname: {type: String, required: true},
	password: {type: String, required: true},
	email: {
		type: String,
		required: true,
		unique: true,
		match: emailRegex,
	},
	avatarPicture: {type: String},
});


module.exports = mongoose.model("User", userSchema);