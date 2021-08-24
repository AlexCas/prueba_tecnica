const rolesController = require("../controllers/rolesController");

exports.getRoutes = (router) => {
		router.post("/role", (req, res, next) => {
				rolesController.createRoleController(req, res, next);
		});

		router.get("/roles", (req, res, next) => {
				rolesController.findRolesController(req, res, next);
		})

		router.delete("/role/:id", (req, res, next) => {
				rolesController.deleteRoleController(req, res, next);
		})

		router.put("/role/:id", (req, res, next) => {
				rolesController.updateRoleController(req, res, next);
		});

}
