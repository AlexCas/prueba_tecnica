const rolesRepository = require("../repository/rolesRepository");

exports.addNewRoleService = async (data) => {
		try {
				const role = await rolesRepository.create(data);

				return role;
		} catch(err) {
				console.log(err);
		}
}

exports.updateRoleService = async (data, id) => {
		try {
				const role = await rolesRepository.update(data, id);

				return role;
		} catch(err) {
				console.log(err);
		}
}

exports.deleteRoleService = async (data, id) => {
		try {
				const role = await rolesRepository.delete(data, id);

				return role;
		} catch(err) {
				console.log(err);
		}
}

exports.findRolesService = async () => {
		try {
				const role = await rolesRepository.findAll();

				return role;
		} catch(err) {
				console.log(err);
		}
}
