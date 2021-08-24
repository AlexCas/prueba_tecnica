const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
		name: String,
		description: String,
		year: String,
		status: Number
});


module.exports = mongoose.model("Movies", moviesSchema);
