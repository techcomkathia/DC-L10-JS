const { Sequelize } = require('sequelize');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
  }
);

// Importa modelos e associações
const models = require('../models/associations');

Object.values(models).forEach(model => {
  if (typeof model === 'function') model(sequelize);
});

module.exports = { sequelize, ...models };