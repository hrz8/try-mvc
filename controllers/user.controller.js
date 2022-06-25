const articleRepository = require("../repositories/article.repository");

module.exports = {
  registerPage: async (req, res) => {
    try {
      res.render("user/register");
    } catch (err) {
      res.json(err);
    }
  },

  loginPage: async (req, res) => {
    try {
      res.render("user/login", {error_message: undefined});
    } catch (err) {
      res.json(err);
    }
  },
};