const express = require('express');

// Controllers
const {
    getAllCharacters,
	createCharacter,	
	updateCharacter,
	deleteCharacter,
    getCharacterById,
    getCharacterByName,
    getCharacterByAge,
    getCharacterByMovie,
} = require('../controllers/personajes.controller');

const {
    characterExists
 } = require('../middlewares/personajes.middleware');

const personajesRouter = express.Router();

personajesRouter.get('/', getAllCharacters);
personajesRouter.post('/', createCharacter);
personajesRouter.get('/?name=nombre',  getCharacterByName)
personajesRouter.get('/?age=edad', getCharacterByAge)
personajesRouter.get('/?movies=idMovie', getCharacterByMovie)

personajesRouter.use('/:id', characterExists)
personajesRouter.route('/:id')
.get(getCharacterById)	
.patch(updateCharacter)
.delete(deleteCharacter);


module.exports = { personajesRouter };
