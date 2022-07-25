const categoryService = require('../services/categoryService');

const categoryControllers = {
  async createCategory(req, res) {
    const category = await categoryService.createCategory(req.body.name);
    return res.status(201).json(category);
  },

  async getAllCategories(_req, res) {
    const categories = await categoryService.getAllCategories();
    return res.status(200).json(categories);
  },
};

module.exports = categoryControllers;