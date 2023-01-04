const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('orders', {
        status: {
        type: DataTypes.STRING,
        allowNull: false
        },
        amount: {
        type: DataTypes.STRING,
        allowNull: false
        },
        stripe_id: {
        type: DataTypes.STRING,
        allowNull: false
        },
    })
    };