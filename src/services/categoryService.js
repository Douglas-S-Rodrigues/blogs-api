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

};

module.exports = categoryService;