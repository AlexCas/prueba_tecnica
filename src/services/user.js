const userRepository = require("../repository/userRepository");
const ncrypt = require("ncrypt-js");
const jwt = require("jsonwebtoken");
const _secretKey = "aky876mnb0qwer";

const ncryptObject = new ncrypt(_secretKey);

exports.addNewUserService = async (data) => {
	try {
		const _data = {
			username: data.username,
			password_hash: ncryptObject.encrypt(data.password),
			status: 1,
		};
		const user = await userRepository.create(_data);

		return user;
	} catch (err) {
		console.log(err);
	}
};

exports.loginUserService = async (data) => {
	try {
		const user = await userRepository.findByUsername(data);
		const _decrypt = await ncryptObject.decrypt(user.password_hash);
		if (_decrypt === data.password) {
			const _jwt = jwt.sign(
				{
					username: user.username,
					role: 1,
				},
				_secretKey
			);

			return {
				token: _jwt,
			};
		} else {
			return "Sin acceso";
		}
	} catch (err) {
		console.log(err);
	}
};
