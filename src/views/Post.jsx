const React = require('react');
const Layout = require('./Layout');

function Post({ login, post }) {
  return (
    <Layout login={login}>
      <form className="postCreate">
        <input type="text" name="title" value={post.title || ''} />
        <textarea rows="10" cols="20" name="title" value={post.body || ''} />
        <button type="submit">Опубликовать</button>
      </form>
    </Layout>
  );
}

module.exports = Post;
