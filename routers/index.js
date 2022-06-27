const {authenticate} = require('./middlewares');

module.exports = (app) => {
  app.use('/articles', authenticate, require('./article.router'));

  app.use('/categories', authenticate, require('./category.router'));

  app.use('/users', require('./user.router'));
};
