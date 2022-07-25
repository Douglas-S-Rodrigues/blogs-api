const { Category } = require('../database/models');

const { nameReqError } = require('./utils');

const categoryService = {
 async createCategory(name) {
  const newCategory = await Category.create(
    { name },
    { raw: true },
    );
  
  if (!name) {
      return nameReqError('"name" is required');
    }
  return newCategory;
  },

  async getAllCategories() {
    const categories = await Category.findAll({ raw: true });
    return categories;
  },

};

module.exports = categoryService;