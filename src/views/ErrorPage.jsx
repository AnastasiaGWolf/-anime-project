const React = require('react');
const Layout = require('./Layout');

function Error({ login }) {
  return (
    <Layout login={login}>
      <div className="error">
        <h2>Ой... запрашиваема страница не найдена</h2>
      </div>
    </Layout>
  );
}

module.exports = Error;
