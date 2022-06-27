const router = require('express').Router();

const categoryApiController = require('../../controllers/api/category.controller');

router.post('/', categoryApiController.processCreate);

module.exports = router;
