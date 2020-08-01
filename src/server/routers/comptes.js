const express = require('express');

const { list, create, view, remove } = require('../controllers/comptes');

const router = express.Router();

router
  .route('/')
  .get(list)
  .post(create);

router
  .route('/:id')
  .get(view)
  .delete(remove);

module.exports = router;
