const rolesService = require("../services/roles");

exports.createRoleController = async (req, res, next) => {
		const data = req.body;

		const role = await rolesService.addNewRoleService(data);

		if (!role) next(role);

		res.json({
				status: 200,
				message: role
		})
}

exports.updateRoleController = async (req, res, next) => {
		const data = req.body;
		const _id = req.params.id;

		const role = await rolesService.updateRoleService(data, _id);

		if (!role) next(role);

		res.json({
				status: 200,
				message: role
		})
}

exports.deleteRoleController = async (req, res, next) => {
		const data = req.body;
		const _id = req.params.id;

		const role = await rolesService.deleteRoleService(data, _id);

		if (!role) next(role);

		res.json({
				status: 200,
				message: role
		})
}

exports.findRolesController = async (req, res, next) => {
		const roles = await rolesService.findRolesService();

		if (!roles) next(roles);

		res.json({
				status: 200,
				message: roles
		})
}
