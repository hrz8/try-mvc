const router = require('express').Router();

const {authorization} = require('../middlewares');

const articleApiController = require('../../controllers/api/article.controller');
const jwt = require('jsonwebtoken');

router.get('/', (req, res, next) => {
  if (!req.headers['authorization']) {
    res.status(403).json({error: 'token required'});
    return;
  }

  const token = req.headers['authorization'];

  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (error) {
    res.status(401).json({error: 'token invalid'});
  }

}, articleApiController.listing);
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
