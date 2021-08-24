const moviesController = require("../controllers/moviesController");
const { isAuth  } = require("../middlewares/auth");


exports.getRoutes = (router) => {
		router.post("/movie", isAuth, (req, res, next) => {
				moviesController.createMovieController(req, res, next);
		})

		router.put("/movie/:id", isAuth, (req, res, next) => {
				moviesController.updateMovieController(req, res, next);
		})

		router.delete("/movie/:id", isAuth, (req, res, next) => {
				moviesController.deleteMovieController(req, res, next);
		})

		router.get("/movies", isAuth, (req, res, next) => {
				moviesController.getMoviesController(req, res, next);
		})

		router.get("/movie/:name", isAuth, (req, res, next) => {
				moviesController.getMovieByNameController(req, res, next);
		})
}
