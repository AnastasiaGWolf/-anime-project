const React = require('react');
const Layout = require('./Layout');

function Registration() {
  return (
    <Layout>
      <div className="regMsg" />

      <form name="registration">
        <label>Имя пользователя:</label>
        <input required type="text" name="name" />

        <label>Почта:</label>
        <input required type="email" name="email" />

        <label>Пароль:</label>
        <input required type="password" name="password" />

        <button className="btnMy" type="submit">Зарегистрироваться</button>
      </form>

      <script defer src="/js/registration.js" />
    </Layout>
  );
}

module.exports = Registration;
