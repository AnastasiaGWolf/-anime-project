const React = require('react');
const Layout = require('./Layout');

function AnimePage({ login, anime, myAn }) {
  return (
    <Layout login={login}>
      <div className="anime-info">
        <img src={anime.data.images.jpg.image_url} alt="images.jpg.large_image_url" />
        <div className="about">
          <h2>
            Название:
            {' '}
            {anime.data.title}
          </h2>
          {anime.data.title_japanese && (
          <h3>
            Оригинальное название:
            {' '}
            {anime.data.title_japanese}
          </h3>
          )}
          <p>
            Жанры:
            {' '}
            {anime.data.genres?.map((el) => (
              <span key={el.mal_id}>
                {el.name}
                ,
                {' '}
              </span>
            ))}
          </p>
          <p>
            Возрастное ограничение:
            {' '}
            {anime.data.rating}
          </p>
          <p>
            Год:
            {' '}
            {anime.data.year}
          </p>
          <p>
            Статус:
            {' '}
            {anime.data.status}
          </p>
          {anime.data.episodes && (
          <p>
            Эпизодов:
            {' '}
            {anime.data.episodes}
          </p>
          )}
          <p>
            Тип:
            {' '}
            {anime.data.type}
          </p>
          <p>
            Рейтинг:
            {' '}
            {anime.data.score}
          </p>
          <p>Описание:</p>
          <p>{anime.data.synopsis}</p>
        </div>
      </div>

      <div className="buttons">
        <button className="btnMy" id="addFavor" type="button" data-animeid={myAn.id}>Добавить в избранное</button>
        <button className="btnMy" id="allPosts" type="button" data-animeid={myAn.id}>Посмотреть статьи про аниме</button>
        <button className="btnMy" id="createPost" type="button">Написать интересную статью</button>
      </div>

      <div className="trailer">
        <h3>Трейлер</h3>
        <iframe
          width="720"
          height={(720 / 16) * 9}
          src={`https://www.youtube.com/embed/${anime.data.trailer.youtube_id}`}
          frameBorder="0"
          allowFullScreen
          title="YouTube Video"
        />
      </div>
      <script defer src="/js/anime.js" />
    </Layout>
  );
}

module.exports = AnimePage;
