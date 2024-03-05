const React = require('react');
const Layout = require('./Layout');

function Account({
  login, user, favorites, posts,
}) {
  return (
    <Layout login={login}>
      <div className="user-info">
        <img className="userPhoto" src={user.foto || '/storage/userFoto/profile_foto.jpg'} alt="User photography" />
        <div className="user-card">
          <p>Имя пользователя:</p>
          <p>{user.name}</p>
          <p>Почта пользователя:</p>
          <p>{user.email}</p>
          <button id="btnUpUser" type="button">Редактировать профиль</button>
          <button id="btnSave" type="button" style={{ display: 'none' }}>Редактировать профиль</button>
        </div>
      </div>

      <div className="cardsContainer">
        {favorites?.map((card) => (
          <div key={card.id} className="card">
            <img src={card.Anime.picture} className="picture" alt="..." />
            <div className="body">
              <h4>{card.Anime.title}</h4>
            </div>
            <button className="btnDltCard" type="button">Удалить из избранного</button>
          </div>
        ))}
      </div>

      <div className="postsContainer">
        {posts?.map((post) => (
          <div className="post">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <button name="btnUpdate" type="button" id={post.id}>Редактировать</button>
            <button name="btnDelete" type="button" id={post.id}>Удалить</button>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Account;
