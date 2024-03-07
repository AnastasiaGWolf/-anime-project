const React = require('react');
const Layout = require('./Layout');

function AnimePage({ login, anime }) {
  return (
    <Layout login={login}>
      <div className="anime-info">
        <img src={anime.data.images.jpg.image_url} alt="images.jpg.large_image_url" />
        <div className="about">
          <h2>
            Название titles.title Array
            {anime.data.title}
          </h2>
          <p>
            Год
            {anime.data.year}
          </p>
          <p>
            Статус
            {anime.data.status}
          </p>
          <p>
            Эпизодов:
            {anime.data.episodes}
          </p>
          <p>Студия studios.name</p>
          <p>Тип: type</p>
          <p>Описание:</p>
          <p>{anime.data.synopsis}</p>
        </div>
      </div>

      <div className="buttons">
        <button className="btn btn-dark" id="addFavor" type="button" data-animeid={anime.id}>Добавить в избранное</button>
        <button className="btn btn-dark" id="allPosts" type="button" data-animeid={anime.id}>Посмотреть статьи про аниме</button>
        <button className="btn btn-dark" id="createPost" type="button">Написать интересную статью</button>
      </div>

      {/* {' '}
      <div className="chat">
        {' '}
        <form>
          {' '}
          <input name="body" type="text" />
          {' '}
          <button type="submit">Отправить</button>
          {' '}
        </form>
        Чат. Здесь будут все данные из таблицы Discussions
        {' '}
      </div> */}
      <script defer src="/js/anime.js" />
      {/* <script defer src="/js/home.js" /> */}
    </Layout>
  );
}

module.exports = AnimePage;
