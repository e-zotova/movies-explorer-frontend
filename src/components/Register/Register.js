import { useState } from "react";

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
    const emptyInputError = "Имя пользователя, почта и пароль должны быть заполнены";

    if (!name || !email || !password) {
      setErrorMessage(emptyInputError);

    } else {
      onRegister(email, password);
    }
  };

  return (
    <main className="register">
      <h1 className="register__header">Добро пожаловать!</h1>
      <form className={`login__form`} onSubmit={onSubmit}>
      <label className="login__label">Имя</label>
        <input
          id="name"
          name="name"
          type="text"
          className="input login__input"
          placeholder="Имя"
          value={formValue.name}
          onChange={handleChange}
        />
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
        <button
          type="submit"
          className="button register__submit-button"
        >
          Зарегистрироваться
        </button>
        <span className="login__switch-label">
          Уже зарегистрированы?
          <a className="button login__switch-button" href="/signin">
            Войти
          </a>
        </span>
      </form>
    </main>
  );
}

export default Register;
