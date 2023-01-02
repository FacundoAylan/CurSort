const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defualtValue: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      defualtValue: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    email_verified:{
      type: DataTypes.BOOLEAN
    },
    birthday: {
      type: DataTypes.STRING
    }
  })
};
