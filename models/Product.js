const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Product = sequelize.define('Product', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    inventoryCount: {
        type: DataTypes.INTEGER,    
        allowNull: false
    }
}); 

module.exports = Product;
