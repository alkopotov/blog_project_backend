const Work = require('../database/models/work');
const Content = require('../database/models/content');
const Tag = require('../database/models/tag');

const { request } = require('express');
const express = require('express');

const router = express.Router()

router.get('/all', (req, res) => {

  async function all() {
    const all = await Work.findAll({include: [Tag, Content]})
    res.json(all);
  }
  all()
})

router.get('/:id', async (req, res) => {

  const {id} = req.params;

  if (isNaN(id)) {
    res.json({status: 'ERR', message: 'id not a number'});
    return
  }

  const work = await Work.findOne({where: {id: +id}, include: [Tag, Content]})

  if (!work) {
    res.json({status: 'ERR', message: 'Item not found in works'});
    return
  }
  res.json(work)
})

module.exports = router
