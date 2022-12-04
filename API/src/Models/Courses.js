const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('courses', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    instructor: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.INTEGER,
    },
    rating: {
      type: DataTypes.FLOAT,
      default: 0,
    },
    image: {
      type: DataTypes.STRING
    },
    difficulty: {
      type: DataTypes.STRING,
    },
  });
};
