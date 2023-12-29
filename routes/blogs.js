const Blog = require('../database/models/blog');
const Tag = require('../database/models/tag');

const { request } = require('express');
const express = require('express');

const router = express.Router()

router.get('/', (req, res) => {

  async function all() {
    const all = await Blog.findAll({include: Tag});
    res.json(all);
  }
  all()
})

module.exports = router