const CategoryService = require("../service/Category.service");
const CustomError = require("../CustomError");

const CategoryController = {
  createCategory(req, res, next) {
    const { name } = req.body;
    if (!name)
      next(
        new CustomError(
          CustomError.BadRequest,
          'You must provide "name" for the category'
        )
      );
    const category = CategoryService.createCategory(name);
    res.json(category);
  },

  getCategories(req, res, next) {
    const categories = CategoryService.getCategories();
    res.json(categories);
  },
};

module.exports = CategoryController;
