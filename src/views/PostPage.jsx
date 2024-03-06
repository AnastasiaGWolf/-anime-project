const React = require('react');
const Layout = require('./Layout');

function Post({ login, article }) {
  return (
    <Layout login={login}>
      <form className="postCreate">
        <input type="text" name="title" value={article.title || ''} placeholder="Заголовок статьи" />
        <textarea rows="10" cols="20" name="title" value={article.body || ''} placeholder="Захватывающий текст" />
        <button type="submit">Опубликовать</button>
      </form>
    </Layout>
  );
}

module.exports = Post;
