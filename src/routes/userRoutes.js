const userController = require("../controllers/userController");

exports.getRoutes = (router) => {
		router.post("/user", (req, res, next) => {
				userController.createUserController(req, res, next);
		});

		router.post("/login", (req, res, next) => {
				userController.loginUserController(req, res, next);
		})
}
