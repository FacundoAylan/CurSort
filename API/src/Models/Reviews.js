const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('reviews', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rating: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
  })
};
