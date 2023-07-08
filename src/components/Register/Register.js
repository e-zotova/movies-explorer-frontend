import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/header-logo.svg";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";

function Register({ onRegister }) {
  const { values, errors, isValid, handleChange } =
    useFormWithValidation();

  const onSubmit = (e) => {
    e.preventDefault();

    onRegister(values.name, values.email, values.password);
  };

  return (
    <section className="auth">
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
      <form className={`auth__form`} autoComplete="off" onSubmit={onSubmit}>
        <label className="auth__label">Имя</label>
        <input
          id="name"
          name="name"
          type="text"
          className="input auth__input"
          placeholder="Имя"
          minLength={2}
          maxLength={30}
          defaultValue={values.name}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <span className="auth__error">{errors.name}</span>
        <label className="auth__label">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          className="input auth__input"
          defaultValue={values.email}
          placeholder="E-mail"
          pattern="[a-z0-9]+@[a-z]+.[a-z]{2,30}"
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
          minLength={8}
          maxLength={20}
          defaultValue={values.password}
          placeholder="Пароль"
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <span className="auth__error">{errors.password}</span>
        <button
          type="submit"
          className="button auth__save-button register__save-button"
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
        <span className="auth__switch-label">
          Уже зарегистрированы?
          <Link className="button auth__switch-button" to="/signin">
            Войти
          </Link>
        </span>
      </form>
    </section>
  );
}

export default Register;
