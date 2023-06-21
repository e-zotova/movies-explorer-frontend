import { useState } from "react";
import headerLogo from "../../images/header-logo.svg";
import profileLogo from "../../images/profile-icon.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [loggedIn, setLoggedIn] = useState(true);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  function onSignOut() {
    localStorage.removeItem("jwt");
    navigate("/signin");
    navigate(0);
  }

  return (
    <section className={`header ${loggedIn ? "" : "header__landing"}`}>
      <img
        className="header__logo"
        src={headerLogo}
        alt="Логотип дипломного проекта"
      />
      {pathname === "/" && (
        <div className="header__link">
          <Link to="/signup" type="button" className="button header__signup">
            Регистрация
          </Link>
          <Link to="/signin" type="button" className="button header__signin">
            Войти
          </Link>
        </div>
      )}
      {(pathname === "/movies" ||
        pathname === "/saved-movies" ||
        pathname === "/profile") && (
        <div className="header__links">
          <div>
            <Link to="/movies" type="button" className="button header__movies">
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              type="button"
              className="button header__saved-movies"
            >
              Сохранённые фильмы
            </Link>
          </div>
          <div className="header__profile-button">
            <img
              className="header__profile-logo"
              src={profileLogo}
              alt="Иконка профиля"
            />
            <Link
              to="/profile"
              type="button"
              className="button header__profile-text"
            >
              Аккаунт
            </Link>
          </div>
        </div>
      )}
      {pathname === "/signin" && (
        <Link to="/signup" className="header__link" type="button"></Link>
      )}
      {pathname === "/signup" && (
        <Link to="/signin" className="header__link" type="button"></Link>
      )}
    </section>
  );
}

export default Header;
