const Sequlize = require('sequelize');
const sequlize = require('../sequelize');

let Memory = sequlize.define('memory', {
    id: {
        type: Sequlize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    path: Sequlize.STRING(64),
    value: Sequlize.STRING(512),
    stat: Sequlize.BOOLEAN,
}, {
    freezeTableName: true,
    timestamps: true,
});

module.exports = Memory;

