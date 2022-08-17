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




const authsRouter = express.Router();

authsRouter.post('/login', login);
authsRouter.post('/register', register);

authsRouter.get('/', getAllUsers);
authsRouter.get('/:id', getUserById);
authsRouter.put('/:id', updateUser);
authsRouter.delete('/:id', deleteUser);

module.exports = { authsRouter };
