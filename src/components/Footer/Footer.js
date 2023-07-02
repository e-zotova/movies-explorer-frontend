function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="dividing-line footer__dividing-line"></div>
      <div className="footer__info">
        <p className="footer__copyright">&copy; 2023</p>
        <ul className="footer__links">
          <li>
            <a
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
              className="button footer__link"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              href="https://github.com/e-zotova"
              target="_blank"
              rel="noreferrer"
              className="button footer__link"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
