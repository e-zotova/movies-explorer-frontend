import React from "react";

function Techs() {
  return (
    <section id="techs" className="techs">
      <h2 className="techs__header">Технологии</h2>
      <div className="dividing-line"></div>
      <div className="techs__description">
        <h3 className="techs__subheader">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className="techs__stack">
        <li className="techs__stack-element">HTML</li>
        <li className="techs__stack-element">CSS</li>
        <li className="techs__stack-element">JS</li>
        <li className="techs__stack-element">React</li>
        <li className="techs__stack-element">Git</li>
        <li className="techs__stack-element">Express.js</li>
        <li className="techs__stack-element">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
