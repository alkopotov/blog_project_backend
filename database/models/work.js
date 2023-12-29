const sequelize = require('../database');
const { DataTypes } = require("sequelize");
const { Sequelize } = require('sequelize');

const Work = sequelize.define('work', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: Sequelize.TEXT,
  full_title: Sequelize.TEXT,
  main_img: Sequelize.TEXT,
  year: Sequelize.TEXT,
  text: Sequelize.TEXT
})

module.exports = Work;