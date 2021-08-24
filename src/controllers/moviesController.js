const moviesServices = require("../services/movies");

exports.createMovieController = async (req, res, next) => {
		const data = req.body;

		const movie = await moviesServices.addNewMovieService(data);

		if (!movie) next(movie);

		res.json({
				status: 200,
				message: movie
		});
}

exports.updateMovieController = async (req, res, next) => {
		const data = req.body;
		const _id = req.params.id;

		const movie = await moviesServices.updateMovieService(data, _id);

		if (!movie) next(movie);

		res.json({
				status: 200,
				message: movie
		});
}

exports.deleteMovieController = async (req, res, next) => {
		const _id = req.params.id;

		const movie = await moviesServices.deleteMovieService(_id);

		if (!movie) next(movie);

		res.json({
				status: 200,
				message: movie
		});
}

exports.getMoviesController = async (req, res, next) => {	
		const movie = await moviesServices.getMoviesService();

		if (!movie) next(movie);

		res.json({
				status: 200,
				message: movie
		});
}

exports.getMovieByNameController = async (req, res, next) => {
		const name = req.params.name;
		const movie = await moviesServices.getMovieByNameService(name);
		
		if (!movie) next(movie);

		res.json({
				status: 200,
				message: movie
		});
}
