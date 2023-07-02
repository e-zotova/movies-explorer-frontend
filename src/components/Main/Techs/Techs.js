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
      <div className="techs__stack">
        <div className="techs__stack-element">HTML</div>
        <div className="techs__stack-element">CSS</div>
        <div className="techs__stack-element">JS</div>
        <div className="techs__stack-element">React</div>
        <div className="techs__stack-element">Git</div>
        <div className="techs__stack-element">Express.js</div>
        <div className="techs__stack-element">mongoDB</div>
      </div>
    </section>
  );
}

export default Techs;
