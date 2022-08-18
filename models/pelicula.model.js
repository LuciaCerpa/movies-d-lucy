const { db, DataTypes } = require('../utils/dataBase.util');

const Pelicula = db.define('pelicula', {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
	},
    image: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
    fechaDeCreacion: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	calificacion: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'active',
	},
});

module.exports = { Pelicula };
