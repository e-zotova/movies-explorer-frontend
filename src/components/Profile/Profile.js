import React from "react";

function Profile() {
  return (
    <section className="profile">
      <div className="profile__info">
        <h1 className="profile__header">Привет, Елена!</h1>
        <div className="profile__name">
          <p>Имя</p>
          <p>Елена</p>
        </div>
        <div className="profile__email">
          <p>Email</p>
          <p>pochta.yandex.ru</p>
        </div>
      </div>
      <div className="profile__buttons">
        <button className="button profile__button profile__edit-button">Редактировать</button>
        <button className="button profile__button profile__signout-button">Выйти из аккаунта</button>
      </div>
    </section>
  );
}

export default Profile;
