const { BlogPost, User, Category } = require('../database/models');

const postService = {
  async getAllPosts() {
    const posts = await BlogPost.findAll(
      {
      include: [
        {
          model: User, 
          as: 'user', 
          attributes: { exclude: 'password' },  
        },
        {
          model: Category,
          as: 'categories',
          through: { attributes: {} },
        },
       ],
     },
    ); 
  return posts;
  },
};

module.exports = postService;