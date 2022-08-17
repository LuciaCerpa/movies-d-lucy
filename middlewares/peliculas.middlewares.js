// Models
const { Pelicula } = require('../models/pelicula.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

const protectPeliculaOwner = catchAsync(async (req, res, next) => {
  next();
});

const peliculaExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const pelicula = await Pelicula.findOne({ where: { id, status: 'active' } });

  if (!pelicula) {
    return next(new AppError('Could not find product by given id', 404));
  }

  req.pelicula = pelicula;
  next();
});

module.exports = { protectPeliculaOwner, peliculaExists };
