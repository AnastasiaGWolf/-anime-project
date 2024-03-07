const React = require('react');
const Layout = require('./Layout');

function PostPage({ login, article }) {
  return (
    <Layout login={login}>
      <form className="postCreate">
        <p id="msg"> </p>
        <input type="text" name="title" value={article.title || ''} placeholder="Заголовок статьи" />
        <textarea rows="10" cols="20" name="body" value={article.body || ''} placeholder="Захватывающий текст" />
        <button className="btnSave" type="submit">Опубликовать</button>
      </form>
      <script defer src="/js/article.js" />
    </Layout>
  );
}

module.exports = PostPage;
