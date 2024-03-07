const React = require('react');
const Layout = require('./Layout');

function Home({ login, cards }) {
  return (
    <Layout login={login}>
      {login ? (
        <>
          <div className="cardsContainer">
            {cards?.map((card) => (
              <div key={card.id} data-exkey={card.external_key} data-cardid={card.id} className="card">
                <a className="nav-link" href={`/anime/${card.id}`}>
                  <img src={card.picture} className="picture" alt="..." />
                  <div className="body">
                    <h4>{card.title}</h4>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <script defer src="/js/home.js" />
        </>
      ) : (
        <div className="cardsContainer">
          {cards?.map((card) => (
            <div key={card.id} className="card">
              <img src={card.picture} className="picture" alt="..." />
              <div className="body">
                <h4>{card.title}</h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}

module.exports = Home;
