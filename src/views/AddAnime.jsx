const React = require('react');
const Layout = require('./Layout');

function PostPage({ login }) {
  return (
    <Layout login={login}>
      <form className="animeCreate">
        <p id="msg"> </p>
        <input type="text" name="external_key" placeholder="ID аниме на MyAnimeList" />
        <input type="text" name="title" placeholder="Название аниме" />
        <input type="text" name="picture" placeholder="Ссылка на изображение" />
        <button className="btnSave btnMy" type="submit">Сохранить</button>
      </form>
      <script defer src="/js/animePosts.js" />
    </Layout>
  );
}

module.exports = PostPage;
