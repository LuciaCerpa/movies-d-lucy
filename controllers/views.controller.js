const path = require('path');

// Models
const { Pelicula } = require('../models/pelicula.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');

const renderIndex = catchAsync(async (req, res, next) => {
	const peliculas = await Pelicula.findAll();

	res.status(200).render('index', {
		title: 'Rendered with Pug',
		peliculas,
	});

	//Serve static html
	// const indexPath = path.join(__dirname, '..', 'public', 'index.html');

	// res.status(200).sendFile(indexPath);
});

module.exports = { renderIndex };
