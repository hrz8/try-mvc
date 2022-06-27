const articleRepository = require("../../repositories/article.repository");

module.exports = {
  registerPage: async (req, res) => {
    res.render("user/register");
  },

  loginPage: async (req, res) => {
    res.render("user/login", {error_message: undefined});
  },
};