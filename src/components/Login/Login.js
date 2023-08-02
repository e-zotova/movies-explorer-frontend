import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/header-logo.svg";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";

function Login({ onLogin }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const onSubmit = (e) => {
    e.preventDefault();

    onLogin(values.email, values.password);
  };

  return (
    <main className="auth">
      <div className="auth__header">
        <Link to="/">
          <img
            className="button logo"
            src={headerLogo}
            alt="Логотип дипломного проекта"
          />
        </Link>
      </div>
      <h1 className="auth__title">Рады видеть!</h1>
      <form className={`auth__form`} onSubmit={onSubmit}>
        <label className="auth__label">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          className="input auth__input"
          defaultValue={values.email}
          placeholder="E-mail"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          minLength={2}
          maxLength={30}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <span className="auth__error">{errors.email}</span>
        <label className="auth__label">Пароль</label>
        <input
          id="password"
          name="password"
          type="password"
          className="input auth__input"
          defaultValue={values.password}
          placeholder="Пароль"
          minLength={8}
          maxLength={20}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <span className="auth__error">{errors.password}</span>
        <button
          type="submit"
          className="button auth__save-button"
          disabled={!isValid}
        >
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
