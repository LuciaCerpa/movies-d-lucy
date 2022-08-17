const express = require('express');

// Controllers
const {
	getAllMovies,
	createMovie,	
	updateMovie,
	deleteMovie,
    getMovieById,
    getMoviesByName,
    getMoviesByGender,
    getMoviesInOrder,
} = require('../controllers/peliculas.controller');

// // Middlewares
// const {
// 	createPeliculaValidators,
// } = require('../middlewares/validators.middleware');
// const { movieExists } = require('../middlewares/peliculas.middleware');

// const {
// 	protectSession,
// 	protectUserAccount,
// } = require('../middlewares/auth.middleware');

const peliculasRouter = express.Router();

// peliculasRouter.post('/movies', createPeliculaValidators, createMovie);

peliculasRouter.get('/movies', getAllMovies);

// peliculasRouter.use(protectSession);

peliculasRouter.get('/?name=nombre', getMoviesByName);
peliculasRouter.get('/?genero=idGenero', getMoviesByGender);
peliculasRouter.get('/?order=ASC | DESC', getMoviesInOrder);

peliculasRouter.get('/create', createMovie);
// peliculasRouter
// 	.use('/movies/:id', /*movieExists*/)
// 	.route('/movies/:id')
//     .get(getMovieById)	
// 	.patch(/*protectUserAccount,*/ updateMovie)
// 	.delete(/*protectUserAccount,*/ deleteMovie);

module.exports = { peliculasRouter };
