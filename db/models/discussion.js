const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Discussion extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Anime, { foreignKey: 'anime_id' });
    }
  }
  Discussion.init({
    user_id: DataTypes.INTEGER,
    anime_id: DataTypes.INTEGER,
    body: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Discussion',
  });
  return Discussion;
};
