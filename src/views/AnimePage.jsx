const React = require('react');
const Layout = require('./Layout');

function AnimePage({ login, anime }) {
  return (
    <Layout login={login}>
      <div className="anime-info">
        <img src={anime.picture} alt="images.jpg.large_image_url" />
        <div className="about">
          <h2>
            Название titles.title Array
            {anime.title}
          </h2>
          <p>Год year</p>
          <p>Статус status</p>
          <p>Эпизодов: episodes</p>
          <p>Студия studios.name</p>
          <p>Тип: type</p>
        </div>
      </div>

      <div className="buttons">
        <button id="addFavor" type="button" data-animeid={anime.id}>Добавить в избранное</button>
        <button id="allPosts" type="button" data-animeid={anime.id}>Посмотреть статьи про аниме</button>
        <button id="createPost" type="button">Написать интересную статью</button>
      </div>

      <div className="chat">
        <form>
          <input name="body" type="text" />
          <button type="submit">Отправить</button>
        </form>
        Чат. Здесь будут все данные из таблицы Discussions
      </div>
      <script defer src="/js/anime.js" />
    </Layout>
  );
}

module.exports = AnimePage;