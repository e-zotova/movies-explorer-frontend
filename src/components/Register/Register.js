import { useState } from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/header-logo.svg";

function Register({ onRegister }) {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formValue;
    const emptyInputError =
      "Имя пользователя, почта и пароль должны быть заполнены";

    if (!name || !email || !password) {
      setErrorMessage(emptyInputError);
    } else {
      onRegister(email, password);
    }
  };

  return (
    <main className="auth">
      <header className="auth__header">
      <Link to="/">
        <img
          className="button logo"
          src={headerLogo}
          alt="Логотип дипломного проекта"
        />
      </Link>
      </header>
      <h1 className="auth__title">Добро пожаловать!</h1>
      <form className={`auth__form`} onSubmit={onSubmit}>
        <label className="auth__label">Имя</label>
        <input
          id="name"
          name="name"
          type="text"
          className="input auth__input"
          placeholder="Имя"
          value={formValue.name}
          onChange={handleChange}
        />
        <label className="auth__label">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          className="input auth__input"
          value={formValue.email}
          placeholder="E-mail"
          onChange={handleChange}
          required
        />
        <label className="auth__label">Пароль</label>
        <input
          id="password"
          name="password"
          type="password"
          className="input auth__input"
          value={formValue.password}
          placeholder="Пароль"
          onChange={handleChange}
          required
        />
        <span className="auth__error">{errorMessage}</span>
        <button
          type="submit"
          className="button auth__save-button"
        >
          Зарегистрироваться
        </button>
        <span className="auth__switch-label">
          Уже зарегистрированы?
          <a className="button auth__switch-button" href="/signin">
            Войти
          </a>
        </span>
      </form>
    </main>
  );
}

export default Register;
