
const { DataTypes } = require('sequelize');

const attributes = {
  postId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'BlogPosts',
      key: 'id',
    }
  },
  categoryId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'Categories',
      key: 'id',
    }
  }
}

module.exports = (sequelize) => {
  const postCategories = sequelize.define('PostCategory', attributes, {
    tableName: 'PostCategories',
    timestamps: false,
  });
  postCategories.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: postCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'posts',
    });
    models.BlogPost.belongsToMany(models.Category, {
      through: postCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories'
    });
  }
  return postCategories;
};