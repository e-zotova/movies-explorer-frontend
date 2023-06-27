import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Profile() {
  const navigate = useNavigate();
  const { name, email } = useContext(CurrentUserContext);

  function onSignOut() {
    localStorage.removeItem("jwt");
    navigate("/signin");
    navigate(0);
  }

  return (
    <section className="profile">
      <div className="profile__info">
        <h1 className="profile__header">Привет, {name}!</h1>
        <label className="profile__name-container">
          <span className="profile__text profile__name-label">Имя</span>
          <input
            type="text"
            className="profile__text profile__input"
            required={true}
            value={name}
            minLength={2}
            maxLength={30}
          ></input>
        </label>
        <div className="dividing-line profile__dividing-line"></div>
        <label className="profile__email-container">
          <span className="profile__text profile__email-label">Email</span>
          <input
            type="email"
            className="profile__text profile__input"
            value={email}
            required={true}
          ></input>
        </label>
      </div>
      <div className="profile__buttons">
        <button className="button profile__button profile__edit-button">
          Редактировать
        </button>
        <button
          className="button profile__button profile__signout-button"
          onClick={onSignOut}
        >
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
