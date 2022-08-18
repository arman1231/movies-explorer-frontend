import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <section className="profile">
      <div className="container">
        <h1 className="profile__heading">Привет, Виталий!</h1>
        <div className="profile__form">
          <fieldset className="profile__user-data">
            <label className="profile__label" htmlFor="profile-input-name">
              <span className="profile__input-caption">Имя</span>
              <input
                className="profile__input"
                id="profile-input-name"
                type="text"
                placeholder="Имя"
                value="Виталий"
              />
            </label>
            <label className="profile__label" htmlFor="profile-input-email">
              <span className="profile__input-caption">E-mail</span>
              <input
                className="profile__input"
                id="profile-input-email"
                type="email"
                placeholder="E-mail"
                value="pochta@yandex.ru"
              />
            </label>
          </fieldset>
          <fieldset className="profile__handlers">
            <span className="profile__error-message">
              При обновлении профиля произошла ошибка.
            </span>
            <button className="profile__edit-button">Редактировать</button>
            <button className="profile__submit-button" type="submit">
              Сохранить
            </button>
            <button className="profile__logout-button">
              Выйти из аккаунта
            </button>
          </fieldset>
        </div>
      </div>
    </section>
  );
}
