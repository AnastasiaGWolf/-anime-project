const React = require('react');
const Layout = require('./Layout');

function Posts({ login, userId, posts }) {
  return (
    <Layout login={login}>
      <div className="postsContainer">
        <button type="button">Написать интересную статью</button>
        {posts?.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <span>
              Статья написана
              {post.User.name}
              , дата создания
              {post.createdAt.toString().slice(0, 21)}
            </span>
            <p>{post.body}</p>
            {userId === post.author && (
              <>
                <button className="btnUpUser" type="button">Редактировать</button>
                <button className="btnDelete" type="button">Удалить</button>
              </>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Posts;
