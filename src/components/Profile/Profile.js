import Header from "../Header/Header.js";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Profile({ loggedIn, onUpdateProfile }) {
  const navigate = useNavigate();

  const { name, email } = useContext(CurrentUserContext);
  const [formValue, setFormValue] = useState({ name, email });
  const [isProfileEditing, setisProfileEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  function editProfile() {
    setisProfileEditing(!isProfileEditing);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formValue;

    setisProfileEditing(false);
    onUpdateProfile(name, email);
  };

  function onSignOut() {
    localStorage.removeItem("jwt");
    navigate("/signin");
    navigate(0);
  }

  return (
    <section className="profile">
      <Header className="header" loggedIn={loggedIn} />
      <div className="profile__info">
        <h1 className="profile__header">Привет, {name}!</h1>
        <form onSubmit={handleSubmit}>
          <div className="profile__name-container">
            <label className="profile__text profile__name-label">Имя</label>
            <input
              id="name"
              name="name"
              type="text"
              className="profile__text profile__input"
              defaultValue={name}
              placeholder="Имя"
              minLength={2}
              maxLength={30}
              onChange={handleChange}
              value={formValue.name}
              required
              disabled={!isProfileEditing}
            ></input>
          </div>
          <div className="profile__email-container">
            <label className="profile__text profile__email-label">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="profile__text profile__input"
              defaultValue={email}
              placeholder="Почта"
              minLength={2}
              maxLength={30}
              onChange={handleChange}
              required
              disabled={!isProfileEditing}
            ></input>
          </div>
          <div className="profile__buttons">
            {isProfileEditing ? (
              <button type="submit" className="button profile__save-button">
                Сохранить
              </button>
            ) : (
              <div className="profile__edit">
                <button
                  type="button"
                  className="button profile__button profile__edit-button"
                  onClick={editProfile}
                >
                  Редактировать
                </button>
                <button
                  type="button"
                  className="button profile__button profile__signout-button"
                  onClick={onSignOut}
                >
                  Выйти из аккаунта
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Profile;
