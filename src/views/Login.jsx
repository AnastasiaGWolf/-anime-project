const React = require('react');
const Layout = require('./Layout');

function Login() {
  return (
    <Layout>
      <div className="logMsg" />

      <form name="login">
        <label>User name</label>
        <input required type="text" name="name" />

        <label>Password</label>
        <input required type="password" name="password" />

        <button className="btnMy" type="submit">Войти</button>
      </form>

      <script defer src="/js/login.js" />
    </Layout>
  );
}

module.exports = Login;
