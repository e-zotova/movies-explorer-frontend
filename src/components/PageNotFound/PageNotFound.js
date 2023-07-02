import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className="page-not-found">
      <h1 className="page-not-found__error-code">404</h1>
      <h2 className="page-not-found__error-name">Страница не найдена</h2>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="button page-not-found__back-button"
      >
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;
