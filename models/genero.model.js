const { db, DataTypes } = require('../utils/dataBase.util');

const Genero = db.define('genero', {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
	},
	nombre: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	imagen: {
		type: DataTypes.STRING,
		allowNull: false,		
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'active',
	},
});

module.exports = { Genero };
