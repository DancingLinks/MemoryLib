const Sequelize = require('sequelize');
const config = require('../config/mysql_config');

let sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    // 仅 SQLite 适用
    // storage: 'path/to/database.sqlite'
});

module.exports = sequelize;

