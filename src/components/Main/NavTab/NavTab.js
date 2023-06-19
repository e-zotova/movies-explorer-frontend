import React from "react";

function NavTab() {
  return (
    <div className="navtab">
      <a href="#about-project" className="button navtab__link">О проекте</a>
      <a href="#techs" className="button navtab__link">Технологии</a>
      <a href="#about-me" className="button navtab__link">Студент</a>
    </div>
  );
}

export default NavTab;