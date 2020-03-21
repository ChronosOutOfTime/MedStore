const mongoose = require('mongoose');

const medicineSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: {type: String, required: true},
	desc: String,
	medicineImage: String,
	expMonth: {type: Number, required: true},
	expYear: {type: Number, required: true},
});

module.exports = mongoose.model("Medicine", medicineSchema);