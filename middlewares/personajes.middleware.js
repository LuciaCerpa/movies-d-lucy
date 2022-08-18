// Models
const { Personaje } = require('../models/personaje.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

const characterExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const personaje = await Personaje.findOne({ where: { id, status: 'active' } });

  if (!personaje) {
    return next(new AppError('Could not find character by given id', 404));
  }

  req.personaje = personaje;
  next();
});

module.exports = { characterExists };
