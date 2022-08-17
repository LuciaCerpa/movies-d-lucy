const express = require('express');

// Controllers
const {
    getAllCharacters,
	createCharacter,	
	updateCharacter,
	deleteCharacter,
    getCharacterById,
    getCharactersByName,
    getCharactersByAge,
    getCharactersByMovie,
} = require('../controllers/personajes.controller');

// Middlewares
// const {
// 	createUserValidators,
// } = require('../middlewares/validators.middleware');
// const { characterExists } = require('../middlewares/personajes.middleware');

// const {
// 	protectSession,
// 	protectUserAccount,
// } = require('../middlewares/auth.middleware');

const personajesRouter = express.Router();


// personajesRouter.use(protectSession);

personajesRouter.get('/', getAllCharacters);
personajesRouter.post('/', createCharacter);
// personajesRouter
// 	.use('/characters/:id', /*characterExists*/)
// 	.route('/characters/:id')
//     .get(getCharacterById)	
// 	.patch(/*protectUserAccount,*/ updateCharacter)
// 	.delete(/*protectUserAccount,*/ deleteCharacter);
    
// personajesRouter.get('/?name=nombre', getCharactersByName)
// personajesRouter.get('/?age=edad', getCharactersByAge)
// personajesRouter.get('/?movies=idMovie', getCharactersByMovie)

module.exports = { personajesRouter };
