const express = require('express');

// Controllers
const {
    login,
    register,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser	
} = require('../controllers/auths.controller');

const { userExists } = ('../middlewares/users.middleware')


const authsRouter = express.Router();

authsRouter.post('/login', login);
authsRouter.post('/register', register);

authsRouter.get('/', getAllUsers);
authsRouter	
	.route('/:id')
    .get(getUserById)	
	.patch(updateUser)
	.delete(deleteUser);

module.exports = { authsRouter };
