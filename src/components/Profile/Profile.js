import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header.js";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";

import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Profile({ loggedIn, onUpdateProfile }) {
  const navigate = useNavigate();
  const { values, isValid, handleChange, resetForm } =
    useFormWithValidation();

  const { name, email } = useContext(CurrentUserContext);
  const [isProfileEditing, setisProfileEditing] = useState(false);

  useEffect(() => {
    resetForm({ name, email });
  }, [name, email, resetForm]);

  function editProfile() {
    setisProfileEditing(!isProfileEditing);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setisProfileEditing(false);
    onUpdateProfile(values.name, values.email);
  };

  function onSignOut() {
    localStorage.removeItem("jwt");
    navigate("/");
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
              placeholder="Имя"
              minLength={2}
              maxLength={30}
              onChange={handleChange}
              value={values.name || ""}
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
              placeholder="Почта"
              minLength={2}
              maxLength={30}
              onChange={handleChange}
              value={values.email || ""}
              required
              disabled={!isProfileEditing}
            ></input>
          </div>
          <div className="profile__buttons">
            {isProfileEditing ? (
              <button
                type="submit"
                className="button profile__save-button"
                disabled={!isValid}
              >
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
