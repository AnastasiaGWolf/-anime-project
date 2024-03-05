const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    static associate(models) {
      this.hasMany(models.Favorites, { foreignKey: 'anime_id' });
      this.hasMany(models.Discussion, { foreignKey: 'anime_id' });
      this.hasMany(models.Post, { foreignKey: 'anime' });
    }
  }
  Anime.init({
    external_key: DataTypes.INTEGER,
    title: DataTypes.STRING,
    picture: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Anime',
  });
  return Anime;
};
