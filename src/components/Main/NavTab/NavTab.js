import React from "react";

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__list">
        <li className="navtab__list-item">
          <a href="#about-project" className="button navtab__link">
            О&nbsp;проекте
          </a>
        </li>
        <li className="navtab__list-item">
          <a href="#techs" className="button navtab__link">
            Технологии
          </a>
        </li>
        <li className="navtab__list-item">
          <a href="#about-me" className="button navtab__link">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
