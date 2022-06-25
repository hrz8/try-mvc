const restrictedEndpoint = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
    return;
  }
  res.redirect('/users/login');
};

module.exports = (app) => {
  app.use('/articles', restrictedEndpoint, require('./article.router'));

  app.use('/categories', restrictedEndpoint, require('./category.router'));

  app.use('/users', require('./user.router'));
};
