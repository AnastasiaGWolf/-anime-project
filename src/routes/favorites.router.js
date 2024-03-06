const favoritesRouter = require('express').Router();
const { Favorites } = require('../../db/models');

favoritesRouter.post('/:animeId', async (req, res) => {
  const { userId } = req.session;
  const { animeId } = req.params;

  try {
    const favoriteCreated = await Favorites.findOne({
      where: { user_id: userId, anime_id: animeId },
    });
    if (favoriteCreated) {
      res.json({ msgDone: 'Аниме уже давно находится в твоем избранном' });
    } else {
      await Favorites.create({ user_id: userId, anime_id: animeId });
      res.json({ msgDone: 'Добавлено в избранное' });
    }
  } catch (error) {
    console.error('Error adding to favorites:', error);
    res.status(500);
  }
});

favoritesRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Favorites.destroy({ where: { id } });
    res.json({ msgDone: 'Удалено из избранного' });
  } catch (error) {
    res.status(500).json({ msgErr: 'Не удалось удалить из избранного' });
  }
});
module.exports = favoritesRouter;
