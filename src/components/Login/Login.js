import { useState } from "react";

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
    <main className="login">
      <h1 className="login__header">Рады видеть!</h1>
      <form className={`login__form`} onSubmit={onSubmit}>
        <label className="login__label">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          className="input login__input"
          value={formValue.email}
          placeholder="E-mail"
          onChange={handleChange}
          required
        />
        <label className="login__label">Пароль</label>
        <input
          id="password"
          name="password"
          type="password"
          className="input login__input"
          value={formValue.password}
          placeholder="Пароль"
          onChange={handleChange}
          required
        />
        <span className="login__error">{errorMessage}</span>
        <button type="submit" className="button login__save-button">
          Войти
        </button>
        <span className="login__switch-label">
          Ещё не зарегистрированы?
          <a className="button login__switch-button" href="/signup">
            Регистрация
          </a>
        </span>
      </form>
    </main>
  );
}

export default Login;
