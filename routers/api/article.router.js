const router = require('express').Router();

const {authorization, jwtAuthentication} = require('../middlewares');

const articleApiController = require('../../controllers/api/article.controller');

router.get('/', jwtAuthentication, authorization('Admin'), articleApiController.listing);

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
