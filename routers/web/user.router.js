const userController = require('../../controllers/web/user.controller');

const router = require('express').Router();

router.get('/register', userController.registerPage);
router.get('/login', userController.loginPage);
router.get('/login-jwt', userController.loginJwt);

module.exports = router;
