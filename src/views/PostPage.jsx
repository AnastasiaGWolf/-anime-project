const React = require('react');
const Layout = require('./Layout');

function PostPage({ login, article, scriptName }) {
  return (
    <Layout login={login}>
      <form className="postCreate">
        <p id="msg"> </p>
        <label>Заголовок статьи</label>
        <input required type="text" name="title" value={article.title || ''} placeholder="Придумай что-нибудь яркое" />

        <label>Захватывающий текст статьи</label>
        <textarea required rows="10" cols="20" name="body" value={article.body || ''} placeholder="Поделись своими мыслями со всем миром!" />

        <label>Номер anime</label>
        <input type="text" name="anime" value={article.anime || ''} placeholder="Например 1, но это не обязательно" />
        <button data-postid={article.id || ''} className="btnSave btnMy" type="submit">Опубликовать</button>
      </form>
      <script defer src={scriptName || '/js/article.js'} />
    </Layout>
  );
}

module.exports = PostPage;
