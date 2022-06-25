const router = require('express').Router();

const articleController = require('../controllers/article.controller');
const articleProcessorController = require('../controllers/articleProcessor.controller');

router.get('/create', articleController.create);
router.get('/', articleController.list);
// router.get('/api', articleController.listJSON);
router.get('/:id', articleController.details);

// processor
router.post('/process-create', articleProcessorController.processCreate);
router.post('/process-update/:id', articleProcessorController.processUpdate);

// restful

module.exports = router;
