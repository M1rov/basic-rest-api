const CategoryService = require("../service/Category.service");
const CustomError = require("../CustomError");

const CategoryController = {
  createCategory(req, res, next) {
    const { name } = req.body;
    if (!name)
      return next(
        new CustomError(
          CustomError.BadRequest,
          'You must provide "name" for the category'
        )
      );
    const category = CategoryService.createCategory(name);
    res.json(category);
  },

  getCategories(req, res) {
    res.json(CategoryService.getCategories());
  },
};

module.exports = CategoryController;
