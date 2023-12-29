const sequelize = require('../database');
const { DataTypes } = require('sequelize')
const { Sequelize } = require('sequelize')


const Blog = sequelize.define('blog', {
  id : {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: DataTypes.TEXT,
  text: DataTypes.TEXT,
  date: DataTypes.TEXT
})

module.exports = Blog;