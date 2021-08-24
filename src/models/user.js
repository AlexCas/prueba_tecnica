const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
		username: String,
		password_hash: String,
		role: Number,
		status: Number
});


module.exports = mongoose.model("User", userSchema);
