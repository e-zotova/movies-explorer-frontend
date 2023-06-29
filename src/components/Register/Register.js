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
    <div className="register">
      <h1 className="register__header">Добро пожаловать!</h1>
      <form className={`login__form`} onSubmit={onSubmit}>
      <span className="login__label">Имя</span>
        <input
          id="name"
          name="name"
          type="text"
          className="input login__input"
          value={formValue.name}
          onChange={handleChange}
        />
        <span className="login__label">E-mail</span>
        <input
          id="email"
          name="email"
          type="email"
          className="input login__input"
          value={formValue.email}
          onChange={handleChange}
        />
        <span className="login__label">Пароль</span>
        <input
          id="password"
          name="password"
          type="password"
          className="input login__input"
          value={formValue.username}
          onChange={handleChange}
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
    </div>
  );
}

export default Register;
