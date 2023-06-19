import React from "react";

function AboutProject() {
  return (
    <div id="about-project" className="about-project">
      <h2 className="about-project__header">О проекте</h2>
      <div className="dividing-line"></div>
      <div className="about-project__description">
        <div>
          <h3 className="about-project__subheader">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className="about-project__subheader">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__weeks">
        <div className="about-project__backend">
          <div className="about-project__backend-week">1 неделя</div>
          <div className="about-project__weeks-text">Back-end</div>
        </div>
        <div className="about-project__frontend">
          <div className="about-project__frontend-week">4 недели</div>
          <div className="about-project__weeks-text">Front-end</div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
