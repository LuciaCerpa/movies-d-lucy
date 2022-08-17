const jwt = require('jsonwebtoken');

// Models
const { Genero } = require('../models/genero.model');
const { Personaje } = require('../models/personaje.model');
const { Pelicula } = require('../models/pelicula.model')

// Utils
const { catchAsync } = require('../utils/catchAsync.util');

const getAllMovies = catchAsync(async (req, res, next) => {
	const peliculas = await Pelicula.findAll();

	res.status(200).json({
		status: 'success',
		peliculas,
	});
});

const getMovieById = catchAsync(async (req, res, next) => {
    const { id } = req.params 
	const pelicula = await Pelicula.findOne({ where: id,
		include:[
			{model:Personaje},			
			],
		});

	res.status(200).json({
		status: 'success',
		pelicula,
	});
});

const createMovie = catchAsync(async (req, res, next) => {
	const { imagen, titulo, fechaDeCreacion } = req.body;

	const newMovie = await Game.create({
		imagen,
        titulo,
		fechaDeCreacion,
	});

	res.status(201).json({
		status: 'success',
		newMovie,
	});
});

const updateMovie = catchAsync(async (req, res, next) => {
	const { pelicula } = req;
	const { imagen, title } = req.body;

	await pelicula.update({ imagen, title });

	res.status(204).json({ status: 'success' });
});

const deleteMovie = catchAsync(async (req, res, next) => {
	const { pelicula } = req;

	await pelicula.update({ status: 'deleted' });

	res.status(204).json({ status: 'success' });
});

const getMoviesByName = catchAsync(async (req, res, next) => {
	const { movieName } = req.params

    const pelicula = await Pelicula.findOne({where: nombre = movieName});
	// const token = req.headers.authorization.split(' ')[1]
	// const decoded = await jwt.verify(token, process.env.JWT_SECRET);

	
	res.status(204).json({
		status: 'success',
		pelicula,
	});
});

const getMoviesByGender = catchAsync(async (req, res, next) => {
	const { movieGender } = req.params

    const pelicula = await Pelicula.findOne({where: genero = movieGender});
	// const token = req.headers.authorization.split(' ')[1]
	// const decoded = await jwt.verify(token, process.env.JWT_SECRET);

	
	res.status(204).json({
		status: 'success',
		pelicula,
	});
});

const getMoviesInOrder = catchAsync(async (req, res, next) => {
	const { Order } = req.params
//investigar orden ascendente y descendente
if(Order === "ASC"){
    const peliculas = await Pelicula.findAll({where: nombre = movieName});

    res.status(204).json({
		status: 'success',
		peliculas,
	});
	// const token = req.headers.authorization.split(' ')[1]
	// const decoded = await jwt.verify(token, process.env.JWT_SECRET);
}else if(Order === "DESC"){
    const peliculas = await Pelicula.findAll({where: nombre = movieName});
    res.status(204).json({
		status: 'success',
		peliculas,
	});
}
	
	
});


module.exports = {
	getAllMovies,
    getMovieById,
    getMoviesByGender,
    getMoviesByName,
    getMoviesInOrder,
	createMovie,
	updateMovie,
	deleteMovie,	
};