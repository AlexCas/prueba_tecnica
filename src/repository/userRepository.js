const User = require("../models/user");

exports.create = async (data) => {
		const user = new User({
			username: data.username,
			password_hash: data.password_hash,
			role: 10,
			status: data.status
		});

		return user.save();
}

exports.findByUsername = async (data) => {
		const user = await User.findOne({
				username: data.username
		}).exec();

		return user;
}
