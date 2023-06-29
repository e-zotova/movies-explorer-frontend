import React from "react";
import profilePhoto from "../../../images/photo.jpeg";

function AboutMe() {
  return (
    <div id="about-me" className="about-me">
      <h2 className="about-me__header">Студент</h2>
      <div className="dividing-line"></div>
      <div className="about-me__container">
        <img
          className="about-me__photo"
          src={profilePhoto}
          alt="Фото профиля"
        />
        <div className="about-me__description">
          <div>
            <h3 className="about-me__subheader">Елена</h3>
            <p className="about-me__title">Фронтенд-разработчик</p>
            <p className="about-me__text">
              Живу в Санкт-Петербурге с 2017 года. Работала тестировщиком
              сначала мобильных, а затем веб-приложений. С 2019 по 2022 работала
              в г.Монреаль (Канада). Вернулась, чтобы начать заново и научиться
              веб-разработке.
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
      </div>
    </div>
  );
}

export default AboutMe;
