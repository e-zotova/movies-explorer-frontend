import { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <img
            className="button logo"
            src={headerLogo}
            alt="Логотип дипломного проекта"
          />
        </Link>
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
          minLength={2}
          maxLength={30}
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
          minLength={8}
          maxLength={20}
          onChange={handleChange}
          required
        />
        <span className="auth__error">{errorMessage}</span>
        <button type="submit" className="button auth__save-button">
          Войти
        </button>
        <span className="auth__switch-label">
          Ещё не зарегистрированы?
          <Link className="button auth__switch-button" to="/signup">
            Регистрация
          </Link>
        </span>
      </form>
    </main>
  );
}

export default Login;
