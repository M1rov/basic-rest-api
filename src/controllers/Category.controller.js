const CategoryService = require('../service/Category.service');
const CustomError = require('../CustomError');

const CategoryController = {
  async createCategory(req, res, next) {
    try {
      const { name } = req.body;
      if (!name)
        return next(
          new CustomError(
            CustomError.BadRequest,
            'You must provide "name" for the category'
          )
        );
      const category = await CategoryService.createCategory(name);
      res.json(category);
    } catch (err) {
      next(err);
    }
  },

  async getCategories(req, res, next) {
    try {
      const categories = await CategoryService.getCategories();
      res.json(categories);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = CategoryController;
