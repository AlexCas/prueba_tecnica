const moviesRepository = require("../repository/moviesRepository");

exports.addNewMovieService = async (data) => {
		try {	
			const movie = await moviesRepository.create(data);

				return movie;
		} catch (err) {
				console.log(err);
		}
}

exports.updateMovieService = async (data, id) => {
		try {
			const movie = await moviesRepository.update(data, id);

				return movie;
		} catch (err) {
				console.log(err);
		}
}

exports.deleteMovieService = async (id) => {
		try {
			const movie = await moviesRepository.delete(id);

				return movie;
		} catch (err) {
				console.log(err);
		}
}

exports.getMoviesService = async () => {
		try {	
			const movie = await moviesRepository.findAll();

				return movie;
		} catch (err) {
				console.log(err);
		}
}

exports.getMovieByNameService = async (name) => {
		try {
			const movie = await moviesRepository.findOneByName(name);

				return movie;
		} catch (err) {
				console.log(err);
		}
}
