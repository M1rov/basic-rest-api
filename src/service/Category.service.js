const Category = require('../db/models/Category.model');
const CustomError = require('../CustomError');

const CategoryService = {
  categories: [],

  createCategory(name) {
    try {
      const category = { name };
      return Category.create(category);
    } catch (err) {
      throw new CustomError(CustomError.NotFound, err.message);
    }
  },

  async getCategories() {
    try {
      return await Category.findAll();
    } catch (err) {
      throw new CustomError(CustomError.NotFound, err.message);
    }
  },
};

module.exports = CategoryService;
