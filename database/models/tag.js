const sequelize = require('../database');
const { DataTypes } = require('sequelize')
const { Sequelize } = require('sequelize')

const Tag = sequelize.define('tag', {
  id : {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: DataTypes.TEXT,
})

module.exports = Tag;