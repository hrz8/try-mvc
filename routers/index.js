const {authenticate} = require('./middlewares');

module.exports = (app) => {
  app.use('/articles', authenticate, require('./web/article.router'));
  app.use('/api/articles', require('./api/article.router'));

  app.use('/categories', authenticate, require('./web/category.router'));
  app.use('/api/categories', require('./api/category.router'));

  app.use('/users', require('./web/user.router'));
  app.use('/api/users', require('./api/user.router'));
};
