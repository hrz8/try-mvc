const { Article } = require('../models')

module.exports = {
  getAll: async function () {
    return await Article.findAll();
  },

  // getUnpublished: async function () {
  //   return await Article.findAll({where: {published: false}});
  // },

  // getPublished: async function () {
  //   return await Article.findAll({where: {published: true}});
  // },

  get: async function (id) {
    return await Article.findOne({ where: Number(id) });
  },

  create: async function (payload) {
    const { title, content, category_id } = payload;
    return await Article.create({ title, content, category_id });
  },

  update: async function (id, payload) {
    const article = await this.get(Number(id));

    const { title: newTitle, content: newContent, category_id: newCategory_id } = payload;
    article.title = newTitle;
    article.content = newContent;
    article.category_id = newCategory_id;
    
    await article.save();
  }
}
