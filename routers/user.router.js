const passport = require('../passport');
const userProcessorController = require('../controllers/userProcessor.controller');
const userController = require('../controllers/user.controller');

const router = require('express').Router();

router.get('/register', userController.registerPage);
router.get('/login', userController.loginPage);

// processor
router.post('/process-register', userProcessorController.register);
// router.post('/process-login', userProcessorController.login) old controller;
router.post('/process-login', passport.authenticate('local', {
  successRedirect: '/articles',
  failureRedirect: '/users/login',
  failureFlash: true
}));

module.exports = router;
