import React from "react";

function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1 className="page-not-found__error-code">404</h1>
      <h2 className="page-not-found__error-name">Страница не найдена</h2>
      <a className="button page-not-found__back-button" href="/">
        Назад
      </a>
    </div>
  );
}

export default PageNotFound;
