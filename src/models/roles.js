const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rolesSchema = new Schema({
		name: String,
		key: Number,
		status: Number
});


module.exports = mongoose.model("Roles", rolesSchema);
