const express = require('express');

const { list, create, view, remove, update } = require('../controllers/audit');

const router = express.Router();

router
  .route('/')
  .get(list)
  .post(create);

router
  .route('/:id')
  .get(view)
  .put(update)
  .delete(remove);

module.exports = router;
