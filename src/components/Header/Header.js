import React from 'react';
import headerLogo from "../../images/header-logo.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function onSignOut() {
    localStorage.removeItem("jwt");
    navigate("/signin");
    navigate(0);
  }

  return (
    <div className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Логотип Место Россия"
      />
      {pathname === "/" && (
        <div className="header__links">
          <Link
            to="/signup"
            type="button"
            className="header__signup"
          >
            Регистрация
          </Link>
          <Link
            to="/signin"
            type="button"
            className="header__signin"
          >
            Войти
          </Link>
        </div>
      )}
      {pathname === "/sign-in" && (
        <Link to="/sign-up" className="header__link" type="button">
        </Link>
      )}
      {pathname === "/sign-up" && (
        <Link to="/sign-in" className="header__link" type="button">
        </Link>
      )}
    </div>
  );
}

export default Header;
