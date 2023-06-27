import { useState } from "react";
import headerLogo from "../../images/header-logo.svg";
import profileLogo from "../../images/profile-icon.svg";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation.js";

function Header() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isBurgerMenuOpen, setisBurgerMenuOpen] = useState(false);

  const { pathname } = useLocation();

  function handleBurgerMenuClick() {
    setisBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <section
      className={`header
      ${pathname === "/" ? "header__landing" : ""}
      ${
        pathname === "/signin" || pathname === "/signup" ? "header__center" : ""
      }
      ${pathname === "/page-not-found" ? "header__hide" : ""}`}
    >
      <Link to="/">
        <img
          className="header__logo"
          src={headerLogo}
          alt="Логотип дипломного проекта"
        />
      </Link>
      {pathname === "/" && !loggedIn && (
        <div className="header__link">
          <Link to="/signup" type="button" className="button header__signup">
            Регистрация
          </Link>
          <Link to="/signin" type="button" className="button header__signin">
            Войти
          </Link>
        </div>
      )}
      {((pathname === "/" && loggedIn) ||
        pathname === "/movies" ||
        pathname === "/saved-movies" ||
        pathname === "/profile") && (
        <div className="header__links">
          <button
            className={`button ${
              isBurgerMenuOpen
                ? "header__close-button"
                : "header__burgermenu-button"
            }`}
            onClick={handleBurgerMenuClick}
          />
          <Navigation isBurgerMenuOpen={isBurgerMenuOpen} />
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
    </section>
  );
}

export default Header;
