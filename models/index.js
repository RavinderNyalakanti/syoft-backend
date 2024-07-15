const { sequelize } = require('../config/db');
const User = require('./User');
const Product = require('./Product');

const syncModels = async () => {
    await sequelize.sync({ force: true });
};

module.exports = { syncModels, User, Product };
