const categoryController = require('../../controllers/web/category.controller');

const router = require('express').Router();

router.get('/create', categoryController.create)

module.exports = router;
