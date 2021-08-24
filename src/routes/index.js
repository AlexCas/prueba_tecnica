const userRoutes = require("./userRoutes");
const rolesRoutes = require("./rolesRoutes");
const moviesRoutes = require("./moviesRoutes");

exports.getRoutes = (router) => {
		userRoutes.getRoutes(router);
		rolesRoutes.getRoutes(router);
		moviesRoutes.getRoutes(router);

		router.get("/", (req, res, next) => {
				res.json({
						message: "Hello world!"
				})
		})
}
