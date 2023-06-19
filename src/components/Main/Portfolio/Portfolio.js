import React from "react";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <div className="portfolio__container">
        <a
          href="https://github.com/e-zotova/how-to-learn"
          target="_blank"
          rel="noreferrer"
          className="button portfolio__project"
        >
          <div className="portfolio__site">Статичный сайт</div>
          <div className="portfolio__link"></div>
        </a>
        <div className="dividing-line portfolio__dividing-line"></div>
        <a
          href="https://github.com/e-zotova/russian-travel"
          target="_blank"
          rel="noreferrer"
          className="button portfolio__project"
        >
          <div className="portfolio__site">Адаптивный сайт</div>
          <div className="portfolio__link"></div>
        </a>
        <div className="dividing-line portfolio__dividing-line"></div>
        <a
          href="https://github.com/e-zotova/react-mesto-api-full-gha"
          target="_blank"
          rel="noreferrer"
          className="button portfolio__project"
        >
          <div className="portfolio__site">
            Одностраничное приложение
          </div>
          <div className="portfolio__link"></div>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
