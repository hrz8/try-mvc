const articleRepository = require("../repositories/article.repository");
const categoryRepository = require("../repositories/category.repository");

module.exports = {
  // listJSON: async (req, res) => {
  //   try {
  //     // const resposne = await axios.get('url//ww..jsonplaceholder')
  //     const articles = await articleRepository.getAll();
  //     res.json(articles);
  //   } catch (err) {
  //     res.json(err);
  //   }
  // },

  list: async (req, res) => {
    try {
      const articles = await articleRepository.getAll();
      res.render("article/list", { articles });
    } catch (err) {
      res.json(err);
    }
  },

  details: async (req, res) => {
    const id = req.params.id;

    try {
      const article = await articleRepository.get(id);
      const categories = await categoryRepository.getAll();
      res.render("article/details", { article, categories });
    } catch (err) {
      res.json(err);
    }
  },
  
  create: async (req, res) => {
    const categories = await categoryRepository.getAll();
    res.render("article/create", {
      categories
    });
  }
};