import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__list">
        <li>
          <a
            href="https://github.com/e-zotova/how-to-learn"
            target="_blank"
            rel="noreferrer"
            className="button portfolio__site"
          >
            Статичный сайт
            <div className="portfolio__link"></div>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/e-zotova/russian-travel"
            target="_blank"
            rel="noreferrer"
            className="button portfolio__site"
          >
            Адаптивный сайт
            <div className="portfolio__link"></div>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/e-zotova/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer"
            className="button portfolio__site"
          >
            Одностраничное приложение
            <div className="portfolio__link"></div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
