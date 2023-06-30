import { useState } from "react";
import headerLogo from "../../images/header-logo.svg";

function Login({ onLogin }) {
  const [formValue, setFormValue] = useState({
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
    const { email, password } = formValue;

    if (!email || !password) {
      setErrorMessage("Имя пользователя и пароль должны быть заполнены");
    } else {
      onLogin(email, password);
    }
  };

  return (
    <main className="auth">
      <header className="auth__header">
        <img
          className="header__logo"
          src={headerLogo}
          alt="Логотип дипломного проекта"
        />
      </header>
      <h1 className="auth__title">Рады видеть!</h1>
      <form className={`auth__form`} onSubmit={onSubmit}>
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
        <button type="submit" className="button auth__save-button">
          Войти
        </button>
        <span className="auth__switch-label">
          Ещё не зарегистрированы?
          <a className="button auth__switch-button" href="/signup">
            Регистрация
          </a>
        </span>
      </form>
    </main>
  );
}

export default Login;
