// Models
// const { User } = require('./user.model');
const { Pelicula } = require('./pelicula.model');
const { Genero } = require('./genero.model');
const { Personaje } = require('./personaje.model');

const initModels = () => {
	// Establish model's relations

// // 1 Pelicula <----> M Genero
// Pelicula.hasMany(Genero);
// Genero.belongsTo(Pelicula);

// // // 1 Pelicula <----> M Personaje
// Pelicula.hasMany(Personaje);
// Personaje.belongsTo(Pelicula);

// // M Pelicula <----> M Personaje
// Pelicula.belongsToMany(Personaje, { foreignKey: 'peliculaId'});
// Personaje.belongsToMany(Pelicula, { foreignKey: 'personajeId'});
};

module.exports = { initModels };
