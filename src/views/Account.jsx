const React = require('react');
const Layout = require('./Layout');

function Account({
  login, user, favorites, posts,
}) {
  return (
    <Layout login={login}>
      <div className="user-info">
        <img className="userPhoto" src={user.avatar || '/storage/userFoto/profile_foto.jpg'} alt="User photography" />
        <div className="user-card">
          <p>Имя пользователя:</p>
          <p>{user.name}</p>
          <p>Почта пользователя:</p>
          <p>{user.email}</p>
          <button id="btnUpUser" data-userid={user.id} type="button">Редактировать профиль</button>
        </div>
      </div>

      <div className="cardsContainer">
        {favorites?.map((card) => (
          <div key={card.id} className="card">
            <a href={`/anime/${card.id}`}>
              <img src={card.Anime.picture} className="picture" alt="..." />
              <div className="body">
                <h4>{card.Anime.title}</h4>
              </div>
            </a>
            <button data-cardid={card.id} className="btnDltCard" type="button">Удалить из избранного</button>
          </div>
        ))}
      </div>

      <div className="postsContainer">
        <button id="btnNewPost" type="button">Написать интересную статью</button>
        {posts?.map((post) => (
          <div key={post.id} className="post">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <button data-postid={post.id} className="btnUpPost" type="button" id={post.id}>Редактировать</button>
            <button data-postid={post.id} className="btnDeletePost" type="button" id={post.id}>Удалить</button>
          </div>
        ))}
      </div>
      <script defer src="/js/user.js" />
      <script defer src="/js/posts.js" />
    </Layout>
  );
}

module.exports = Account;
