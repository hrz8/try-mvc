const router = require('express').Router();

const articleController = require('../../controllers/web/article.controller');

router.get('/create', articleController.create);
router.get('/', articleController.list);
// router.get('/api', articleController.listJSON);
router.get('/:id', articleController.details);

module.exports = router;
