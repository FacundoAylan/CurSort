const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
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
    price: {
      type: DataTypes.INTEGER,
      
    },

    fecha: {
      type : DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    rating: {
      type: DataTypes.FLOAT,

      defualtValue: 0,

    },
    image: {
      type: DataTypes.STRING
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    difficulty: {
      type: DataTypes.STRING,
    },
  });
};
