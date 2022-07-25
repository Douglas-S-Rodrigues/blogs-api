const postService = require('../services/postService');

const postControllers = {
  async getAllPosts(_req, res) {
    const posts = await postService.getAllPosts();
    return res.status(200).json(posts);
  },
};

module.exports = postControllers;