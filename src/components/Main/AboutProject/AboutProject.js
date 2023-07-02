import React from "react";

function AboutProject() {
  return (
    <section id="about-project" className="about-project">
      <h2 className="about-project__header">О проекте</h2>
      <div className="dividing-line"></div>
      <div className="about-project__description">
        <div className="about-project__stages">
          <h3 className="about-project__subheader">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__deadlines">
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
          <p className="about-project__backend-week">1 неделя</p>
          <p className="about-project__weeks-text">Back-end</p>
        </div>
        <div className="about-project__frontend">
          <p className="about-project__frontend-week">4 недели</p>
          <p className="about-project__weeks-text">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
