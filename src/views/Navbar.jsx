const React = require('react');

function Navbar({ login }) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {login ? (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Anime-port
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <a className="nav-link" href="/login">
                Личный кабинет
              </a>
              <a className="nav-link" href="/logout">
                Выйти
              </a>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Anime-port
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <a className="nav-link" href="/login">
                Войти
              </a>
              <a className="nav-link" href="/registration">
                Зарегистрироваться
              </a>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

module.exports = Navbar;
