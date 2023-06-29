import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Profile({ onUpdateProfile }) {
  const navigate = useNavigate();
  const { name, email } = useContext(CurrentUserContext);
  const [formValue, setFormValue] = useState({ name, email });

  const [isProfileEditing, setisProfileEditing] = useState(false);

  function changeProfileEditing(state) {
    document.getElementById("name").disabled = state;
    document.getElementById("email").disabled = state;
    setisProfileEditing(!isProfileEditing);
  }

  const handleChange = (e) => {
    const { key, value } = e.target;
    setFormValue({
      ...formValue,
      [key]: value,
    });
  };

  function editProfile() {
    changeProfileEditing(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    changeProfileEditing(true);
    onUpdateProfile(name, email);
  };

  function onSignOut() {
    localStorage.removeItem("jwt");
    navigate("/signin");
    navigate(0);
  }

  return (
    <section className="profile">
      <div className="profile__info">
        <h1 className="profile__header">Привет, {name}!</h1>
        <form onSubmit={handleSubmit}>
          <label className="profile__name-container">
            <span className="profile__text profile__name-label">Имя</span>
            <input
              id="name"
              type="text"
              className="profile__text profile__input"
              required={true}
              defaultValue={name}
              minLength={2}
              maxLength={30}
              onChange={handleChange}
              disabled
            ></input>
          </label>
          <div className="dividing-line profile__dividing-line"></div>
          <label className="profile__email-container">
            <span className="profile__text profile__email-label">Email</span>
            <input
              id="email"
              type="email"
              className="profile__text profile__input"
              defaultValue={email}
              required={true}
              onChange={handleChange}
              disabled
            ></input>
          </label>
          <div className="profile__buttons">
            {isProfileEditing ? (
              <button type="submit" className="button profile__save-button">
                Сохранить
              </button>
            ) : (
              <div className="profile__edit">
                <button
                  className="button profile__button profile__edit-button"
                  onClick={editProfile}
                >
                  Редактировать
                </button>
                <button
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
