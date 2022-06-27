const router = require('express').Router();

const {authorization} = require('../middlewares');

const articleApiController = require('../../controllers/api/article.controller');

router.post(
  '/',
  authorization('User'),
  articleApiController.processCreate
);
router.post(
  '/update/:id',
  authorization('Admin'),
  articleApiController.processUpdate
);

module.exports = router;
