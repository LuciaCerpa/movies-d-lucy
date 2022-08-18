const jwt = require('jsonwebtoken');

// Models
const { genero } = require('../models/genero.model');
const { Personaje } = require('../models/personaje.model');
const { Pelicula } = require('../models/pelicula.model')

// Utils
const { catchAsync } = require('../utils/catchAsync.util');

const getAllCharacters = catchAsync(async (req, res, next) => {
	const personajes = await Personaje.findAll();

	res.status(200).json({
		status: 'success',
		personajes,
	});
});

const getCharacterById = catchAsync(async (req, res, next) => {
    const { id } = req.params 
	const personaje = await Personaje.findOne({ where: {id}
		// include:[
		// 	{model:Pelicula},			
		// 	],
		});

	res.status(200).json({
		status: 'success',
	    personaje,
	});
});

const createCharacter = catchAsync(async (req, res, next) => {
	const { imagen, nombre, edad, peso, historia, peliculas } = req.body;

	const newCharacter = await Personaje.create({
		imagen,
        nombre,
		edad,
        peso,
        historia,
        peliculas    
	});

	res.status(201).json({
		status: 'success',
		newCharacter,
	});
});

const updateCharacter = catchAsync(async (req, res, next) => {
	const { personaje } = req;
	const { imagen, nombre, edad, peso, historia } = req.body;

	await personaje.update({ imagen, nombre, edad, peso, historia });

	res.status(204).json({ status: 'success' });
});

const deleteCharacter = catchAsync(async (req, res, next) => {
	const { personaje } = req;

	await personaje.update({ status: 'deleted' });

	res.status(204).json({ status: 'success' });
});

const getCharacterByName = catchAsync(async (req, res, next) => {
	const { nombre } = req.params

    const personaje = await Personaje.findOne({where: nombre});
	// const token = req.headers.authorization.split(' ')[1]
	// const decoded = await jwt.verify(token, process.env.JWT_SECRET);
console.log(personaje)
	
	res.status(204).json({
		status: 'success',
		personaje,
	});
});

const getCharacterByAge = catchAsync(async (req, res, next) => {
	const { edad } = req.params

    const personaje = await Personaje.findOne({where: edad, status:"active"});
	// const token = req.headers.authorization.split(' ')[1]
	// const decoded = await jwt.verify(token, process.env.JWT_SECRET);

	
	res.status(204).json({
		status: 'success',
		personaje,
	});
});

const getCharacterByMovie = catchAsync(async (req, res, next) => {
	const { personaje } = req
	const { idMovie } = req.params
//investigar orden ascendente y descendente
    const movie = await Personaje.findAll({where: {id: personaje.id}, include:[Pelicula,{where:{id:idMovie}}]});

    res.status(204).json({
		status: 'success',
		movie,
	});
	// const token = req.headers.authorization.split(' ')[1]
	// const decoded = await jwt.verify(token, process.env.JWT_SECRET);
	
	
});


module.exports = {
	getAllCharacters,
    getCharacterById,
    getCharacterByName,
    getCharacterByAge,
    getCharacterByMovie,
	createCharacter,
	updateCharacter,
	deleteCharacter,	
};