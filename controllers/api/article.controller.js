const { Article } = require('../../models');
const articleRepository = require('../../repositories/article.repository');

module.exports = {
  processCreate: async (req, res) => {
    try {
      await articleRepository.create(req.body); // insert data to db
      res.redirect("/articles");
    } catch (err) {
      res.json(err);
    }
  },
  processUpdate: async (req, res) => {
    const id = req.params.id;

    try {
      await articleRepository.update(id, req.body);
      res.redirect(`/articles/${id}`);
    } catch (err) {
      res.json(err);
    }
  },
  listing: async (req, res) => {
    try {
      const articles = await articleRepository.getAll();
      res.json({ result: articles });
    } catch (err) {
      res.json(err);
    }
  }
}