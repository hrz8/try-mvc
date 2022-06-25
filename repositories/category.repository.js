const { Category } = require('../models')

module.exports = {
  getAll: async () => {
    return await Category.findAll();
  }
}
