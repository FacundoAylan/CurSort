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
    enabled: {
      type: DataTypes.BOOLEAN,
      defualtValue: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      defualtValue: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      isEmail: true,
    },
    email_verified:{
      type: DataTypes.BOOLEAN
    },
    birthday: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.ENUM('F', 'M')
    }
  })
};
