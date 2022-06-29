const router = require('express').Router();

const {authorization, jwtAuthentication} = require('../middlewares');

const articleApiController = require('../../controllers/api/article.controller');

router.get('/', jwtAuthentication, authorization('Admin'), articleApiController.listing);

router.post(
  '/',
  jwtAuthentication,
  authorization('User'),
  articleApiController.create
);

router.put(
  '/update/:id',
  jwtAuthentication,
  authorization('Admin'),
  articleApiController.update
);

module.exports = router;
