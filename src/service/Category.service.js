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
};

module.exports = CategoryService;
