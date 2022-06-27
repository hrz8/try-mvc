const { Category } = require('../../models');

module.exports = {
  processCreate: async (req, res) => {
    try {
      const { name } = req.body;
      await Category.create({ name });
      res.redirect("/articles");
    } catch (err) {
      res.json(err);
    }
  }
}