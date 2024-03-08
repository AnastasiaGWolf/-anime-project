const React = require('react');
const Layout = require('./Layout');

function Home({ login, cards }) {
  return (
    <Layout login={login}>
      {login ? (
        <div className="cardsContainer">
          {cards?.map((card) => (
            <a href={`/anime/${card.id}`}>
              <div
                key={card.id}
                data-exkey={card.external_key}
                data-cardid={card.id}
                className="anime"
                style={{ 'background-image': `url(${card.picture})` }}
              >
                <h4>{card.title}</h4>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="cardsContainer">
          {cards?.map((card) => (
            <div
              key={card.id}
              data-exkey={card.external_key}
              data-cardid={card.id}
              className="anime"
              style={{ 'background-image': `url(${card.picture})` }}
            >
              <h4>{card.title}</h4>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}

module.exports = Home;
