import React from "react";
import { NavLink } from "react-router-dom";

function NavTab() {
  return (
    <div className="navtab">
      <NavLink to="#about-project" className="button navtab__link">О проекте</NavLink>
      <NavLink to="#techs" className="button navtab__link">Технологии</NavLink>
      <NavLink to="#about-me" className="button navtab__link">Студент</NavLink>
    </div>
  );
}

export default NavTab;