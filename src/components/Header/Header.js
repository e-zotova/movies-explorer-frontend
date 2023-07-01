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
    <header
      className={`header
      ${pathname === "/" ? "header_landing" : ""}
      ${pathname === "/profile" ? "header_profile" : ""}`}
    >
      <Link to="/">
        <img
          className="header__logo"
          src={headerLogo}
          alt="Логотип дипломного проекта"
        />
      </Link>
      {!loggedIn ? (
        <div className="header__link">
          <Link to="/signup" className="button header__signup">
            Регистрация
          </Link>
          <Link to="/signin" className="button header__signin">
            Войти
          </Link>
        </div>
      ) : (
        <nav className="header__links">
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
            <Link
              to="/movies"
              className={`button header__movies
            ${pathname === "/movies" ? "header__selected" : ""}`}
            >
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              className={`button header__saved-movies header__active
              ${pathname === "/saved-movies" ? "header__selected" : ""}`}
            >
              Сохранённые фильмы
            </Link>
          </div>
          <div className="button header__profile-button">
            <img
              className="header__profile-logo"
              src={profileLogo}
              alt="Иконка профиля"
            />
            <Link
              to="/profile"
              className="header__profile-text"
            >
              Аккаунт
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
