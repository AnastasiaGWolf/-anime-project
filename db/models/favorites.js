const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Anime, { foreignKey: 'anime_id' });
    }
  }
  Favorites.init({
    user_id: DataTypes.INTEGER,
    anime_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Favorites',
  });
  return Favorites;
};
