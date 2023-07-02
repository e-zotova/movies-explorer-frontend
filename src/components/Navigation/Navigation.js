import { Link, useLocation } from "react-router-dom";
import profileLogo from "../../images/profile-icon.svg";

function Navigation({ isBurgerMenuOpen }) {
  const { pathname } = useLocation();

  return (
    <nav className="navigation">
      {isBurgerMenuOpen && (
        <div className="navigation__overlay">
          <div className="navigation__panel">
            <ul className="navigation__links">
              <li>
                <Link
                  to="/"
                  type="button"
                  className={`button navigation__link
            ${pathname === "/" ? "navigation__link_active" : ""}`}
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  type="button"
                  className={`button navigation__link
              ${pathname === "/movies" ? "navigation__link_active" : ""}`}
                >
                  Фильмы
                </Link>
              </li>
              <li>
                <Link
                  to="/saved-movies"
                  type="button"
                  className={`button navigation__link
              ${pathname === "/saved-movies" ? "navigation__link_active" : ""}`}
                >
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
            <button type="button" className="button navigation__profile-button">
              <img
                className="navigation__profile-logo"
                src={profileLogo}
                alt="Иконка профиля"
              />
              <Link to="/profile" className="navigation__profile-text">
                Аккаунт
              </Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
