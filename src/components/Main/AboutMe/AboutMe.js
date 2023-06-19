import React from "react";
import profilePhoto from "../../../images/photo.jpeg";

function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="about-me__header">Студент</h2>
      <div className="dividing-line"></div>
      <div className="about-me__container">
        <div className="about-me__description">
          <h3 className="about-me__subheader">Елена</h3>
          <p className="about-me__title">Фронтенд-разработчица</p>
          <p className="about-me__text">
            Живу в Санкт-Петербурге с 2017 года. Работала тестировщиком сначала
            мобильных, а затем веб-приложений. С 2019 по 2022 работала в
            г.Монреаль (Канада). Вернулась, чтобы начать заново и научиться
            веб-разработке.
          </p>
          <a
            href="https://github.com/e-zotova/"
            target="blank"
            className="button about-me__github"
          >
            Github
          </a>
        </div>
        <img
          className="about-me__photo"
          src={profilePhoto}
          alt="Фото профиля"
        ></img>
      </div>
    </div>
  );
}

export default AboutMe;
