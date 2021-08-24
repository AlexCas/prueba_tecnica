const userService = require("../services/user");

exports.createUserController = async (req, res, next) => {
		const data = req.body;

		const user = await userService.addNewUserService(data);

		if(!user) next(user);

		res.json({
				status: 200,
				message: user
		})
}

exports.loginUserController = async (req, res, next) => {
		const data = req.body;

		const user = await userService.loginUserService(data);

		if (!user) next(user);

		res.json({
				status: 200,
				message: user
		})
}
