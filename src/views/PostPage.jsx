const React = require('react');
const Layout = require('./Layout');

function PostPage({ login, article, scriptName }) {
  return (
    <Layout login={login}>
      <form className="postCreate">
        <p id="msg"> </p>
        <input type="text" name="title" value={article.title || ''} placeholder="Заголовок статьи" />
        <textarea rows="10" cols="20" name="body" value={article.body || ''} placeholder="Захватывающий текст" />
        <input type="text" name="anime" value={article.anime || ''} placeholder="Номер anime" />
        <button data-postid={article.id || ''} className="btnSave btnMy" type="submit">Опубликовать</button>
      </form>
      <script defer src={scriptName || '/js/article.js'} />
    </Layout>
  );
}

module.exports = PostPage;
