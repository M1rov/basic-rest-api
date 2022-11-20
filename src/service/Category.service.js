const Category = require('../db/models/Category.model');

const CategoryService = {
  categories: [],

  createCategory(name) {
    const category = { name };
    return Category.create(category);
  },

  async getCategories() {
    return await Category.findAll();
  },
};

module.exports = CategoryService;
