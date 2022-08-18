// Models
const { User } = require('../models/user.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

const userExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id, status: 'active' } });

  if (!user) {
    return next(new AppError('Could not find user by given id', 404));
  }

  req.user = user;
  next();
});

module.exports = { userExists };
