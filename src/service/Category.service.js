const CustomError = require("../CustomError");
const CategoryService = {
  categories: [],

  createCategory(name) {
    const id = this.categories.length
      ? this.categories[this.categories.length - 1].id + 1
      : 1;
    const category = { id, name };
    this.categories.push(category);
    return category;
  },

  getCategories() {
    return this.categories;
  },

  checkCategory(category_id) {
    const category = this.categories.find((cat) => cat.id === category_id);
    if (!category) {
      throw new CustomError(
        CustomError.NotFound,
        "No category with such id was found"
      );
    }
  },
};

module.exports = CategoryService;
