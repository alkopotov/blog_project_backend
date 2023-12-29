const sequelize = require('../database');
const { DataTypes } = require('sequelize')
const { Sequelize } = require('sequelize')

const Content = sequelize.define('content', {
  id : {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  type: DataTypes.TEXT,
  contentValue: DataTypes.TEXT,
  position: DataTypes.INTEGER,
})

module.exports = Content;