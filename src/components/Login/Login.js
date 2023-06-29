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
    <div className="login">
      <h1 className="login__header">Рады видеть!</h1>
      <form className={`login__form`} onSubmit={onSubmit}>
        <p className="login__label">E-mail</p>
        <input
          id="email"
          name="email"
          type="email"
          className="input login__input"
          value={formValue.email}
          onChange={handleChange}
        />
        <p className="login__label">Пароль</p>
        <input
          id="password"
          name="password"
          type="password"
          className="input login__input"
          value={formValue.username}
          onChange={handleChange}
        />
        <p className="login__error">{errorMessage}</p>
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
    </div>
  );
}

export default Login;
