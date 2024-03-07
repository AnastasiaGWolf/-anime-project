const React = require('react');
const Layout = require('./Layout');

function Posts({ login, userId, posts }) {
  return (
    <Layout login={login}>
      <div className="postsContainer">
        <button className="btnMy" id="btnNewPost" type="button">Написать интересную статью</button>
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
                <button data-postid={post.id} className="btnUpPost btnMy" type="button">Редактировать</button>
                <button data-postid={post.id} className="btnDeletePost btnMy" type="button">Удалить</button>
              </>
            )}
          </div>
        ))}
      </div>
      <script defer src="/js/posts.js" />
      <script defer src="/js/animePosts.js" />
    </Layout>
  );
}

module.exports = Posts;
