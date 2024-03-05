const React = require('react');
const Layout = require('./Layout');

function Home({ login, cards }) {
  return (
    <Layout login={login}>
      <div className="cardsContainer">
        {cards?.map((card) => (
          <div className="card">
            <img src={card.picture} className="picture" alt="..." />
            <div className="body">
              <h4>{card.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Home;
