import React from "react";
import profilePhoto from "../../../images/photo.jpeg";

function AboutMe() {
  return (
    <div id="about-me" className="about-me">
      <h2 className="about-me__header">Студент</h2>
      <div className="dividing-line"></div>
      <div className="about-me__container">
        <div className="about-me__description">
          <div>
            <h3 className="about-me__subheader">Елена</h3>
            <p className="about-me__title">Фронтенд-разработчик</p>
            <p className="about-me__text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          </div>
          <a
            href="https://github.com/e-zotova/"
            target="_blank"
            rel="noreferrer"
            className="button about-me__github"
          >
            Github
          </a>
        </div>

        <img
          className="about-me__photo"
          src={profilePhoto}
          alt="Фото профиля"
        />
      </div>
    </div>
  );
}

export default AboutMe;
