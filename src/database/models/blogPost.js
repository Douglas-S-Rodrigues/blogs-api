const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.STRING
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    }
  },
  published: {
    type: DataTypes.DATE
  },
  updated: {
    type: DataTypes.DATE
  }
};

module.exports = (sequelize) => {
  const blogPost = sequelize.define('BlogPost', attributes, {
    tableName: 'BlogPosts',
    timestamps: false,
  });
  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user',
    });
  };
  return blogPost;
};