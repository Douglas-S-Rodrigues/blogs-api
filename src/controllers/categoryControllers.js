const categoryService = require('../services/categoryService');

const categoryControllers = {
  async createCategory(req, res) {
    const category = await categoryService.createCategory(req.body.name);
    return res.status(201).json(category);
  },
};

module.exports = categoryControllers;