const router = require('express').Router();

const {authorization} = require('./middlewares');
const articleController = require('../controllers/article.controller');
const articleProcessorController = require('../controllers/articleProcessor.controller');

router.get('/create', articleController.create);
router.get('/', articleController.list);
// router.get('/api', articleController.listJSON);
router.get('/:id', articleController.details);

// processor
router.post(
  '/process-create',
  authorization('User'),
  articleProcessorController.processCreate
);
router.post(
  '/process-update/:id',
  authorization('Admin'),
  articleProcessorController.processUpdate
);

module.exports = router;
