const Movies = require("../models/movies");

exports.create = async (data) => {
		const movie = new Movies({
				name: data.name,
				description: data.description,
				year: data.year,
				status: 1
		});

		return movie.save();
}

exports.update = async (data, id) => {
		const movie = await Movies.findOneAndUpdate({
				_id: id
		}, data);

		return movie;
}

exports.delete = async (id) => {
		const movie = await Movies.findOneAndDelete({
				_id: id
		});

		return movie;
}

exports.findAll = async () => {
		const movies = await Movies.find();

		return movies;
}

exports.findOneByName = async (name) => {
		const movies = await Movies.findOne({
				name: name
		});

		return movies;
}
