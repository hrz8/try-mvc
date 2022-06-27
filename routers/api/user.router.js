const passport = require('../../passport');

const userApiController = require('../../controllers/api/user.controller');

const router = require('express').Router();

router.post('/register', userApiController.register);
// router.post('/login', userProcessorController.login) old controller;
router.post('/login', passport.authenticate('local', {
  successRedirect: '/articles',
  failureRedirect: '/users/login',
  failureFlash: true
}));

router.post('/login-jwt', userApiController.login);

module.exports = router;
