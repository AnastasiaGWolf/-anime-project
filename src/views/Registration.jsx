const React = require('react');
const Layout = require('./Layout');

function Registration() {
  return (
    <Layout>
      <div className="regMsg" />

      <form name="registration">
        <label>Имя пользователя:</label>
        <input type="text" name="name" />

        <label>Почта:</label>
        <input type="email" name="email" />

        <label>Пароль:</label>
        <input type="password" name="password" />

        <button type="submit">Зарегистрироваться</button>
      </form>

      <script defer src="/js/registration.js" />
    </Layout>
  );
}

module.exports = Registration;
