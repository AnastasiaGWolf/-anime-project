const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'author' });
      this.belongsTo(models.Anime, { foreignKey: 'anime' });
    }
  }
  Post.init({
    author: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    anime: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
