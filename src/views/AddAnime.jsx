const React = require('react');
const Layout = require('./Layout');

function PostPage({ login }) {
  return (
    <Layout login={login}>
      <form className="animeCreate">
        <p id="msg"> </p>
        <label>ID аниме на MyAnimeList</label>
        <input required type="text" name="external_key" placeholder="Например 123" />

        <label>Название аниме</label>
        <input required type="text" name="title" placeholder="Как укажешь, так и будет на главной" />

        <label>Ссылка на изображение</label>
        <input required type="text" name="picture" placeholder="URL изображения" />
        <button className="btnSave btnMy" type="submit">Сохранить</button>
      </form>
      <script defer src="/js/animePosts.js" />
    </Layout>
  );
}

module.exports = PostPage;
