const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('orders', {
        status: {
        type: DataTypes.STRING,
        allowNull: false
        },
        total: {
        type: DataTypes.STRING,
        allowNull: false
        },
        stripe_id: {
        type: DataTypes.STRING,
        allowNull: false
        },
        user_mail: {
        type: DataTypes.STRING,
        allowNull: false
        },
        course_name: {
        type: DataTypes.STRING,
        allowNull: false
        },
    })
    };