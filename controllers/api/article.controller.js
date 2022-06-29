const { Article } = require('../../models');
const articleRepository = require('../../repositories/article.repository');

module.exports = {
  create: async (req, res) => {
    try {
      const result = await articleRepository.create(req.body); // insert data to db
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;

    try {
      const result = await articleRepository.update(id, req.body);
      res.json(result);
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