const Roles = require("../models/roles");

exports.create = async (data) => {
		const role = new Roles({
				name: data.name,
				key: data.key,
				status: 1
		});

		return role.save(); 
}

exports.update = async (data, id) => {
		const role = await Roles.findOneAndUpdate({
			_id: id
		}, data);

		return role;
}

exports.delete = async (data, id) => {
		const role = await Roles.findOneAndDelete({
			_id: id
		});

		return role;
}

exports.findAll = async () => {
		const roles = await Roles.find();

		return roles;
}
