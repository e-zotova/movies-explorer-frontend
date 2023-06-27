import { Link, useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();

  return (
    <div
      className={`footer ${
        pathname === "/" ||
        pathname === "/movies" ||
        pathname === "/saved-movies"
          ? "footer__show"
          : ""
      }`}
    >
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="dividing-line footer__dividing-line"></div>
      <div className="footer__info">
        <div className="footer__copyright">&copy; 2023</div>
        <div className="footer__links">
          <a
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noreferrer"
            className="button footer__link footer__praktikum-link"
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/e-zotova"
            target="_blank"
            rel="noreferrer"
            className="button footer__link"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
