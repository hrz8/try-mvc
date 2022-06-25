const categoryProcessorController = require('../controllers/categoryProcessor.controller');
const categoryController = require('../controllers/category.controller');

const router = require('express').Router();

router.get('/create', categoryController.create)

// processor
router.post('/process-create', categoryProcessorController.processCreate);

module.exports = router;
