import React from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Profile({ handleProfileSubmit, handleLogout }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [isValidName, setIsValidName] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");
  const [nameError, setNameError] = React.useState("");

  function handleChangeName(e) {
    const input = e.target;
    const validName = /^[a-zA-Zа-яА-Я- ]+$/.test(input.value);
    setIsValidName(validName);
    if (input.value.length < 1) {
      setNameError("Вы пропустили это поле");
    } else if (input.value.length < 2) {
      setNameError("Длина имени должна быть не менее 2 символов");
    } else if (!validName) {
      setNameError("Имя может содержать только буквы, пробел или дефис");
    } else {
      setNameError("");
    }
    setName(input.value);
  }

  function handleChangeEmail(e) {
    const input = e.target;
    const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(input.value);
    setEmail(input.value);
    setIsValidEmail(validEmail);
    if (!validEmail) {
      setEmailError("Неверный формат почты");
    } else {
      setEmailError("");
    }
  }

  function handleLogoutClick(e) {
    e.preventDefault();
    handleLogout();
  }

  function handleEdit(e) {
    e.preventDefault();
    document.querySelector(".profile__edit-button").classList.toggle('hide');
    document.querySelector(".profile__submit-button").classList.toggle('hide');
    document.querySelector(".profile__logout-button").classList.toggle('hide');
    document.querySelectorAll(".profile__input").forEach((input) => input.disabled = false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleProfileSubmit(name, email);
    handleEdit(e);
  }
  return (
    <section className="profile">
      <div className="container">
        <h1 className="profile__heading">Привет, {currentUser.name}!</h1>
        <div className="profile__form">
          <fieldset className="profile__user-data">
            <label className="profile__label" htmlFor="profile-input-name">
              <span className="profile__input-caption">Имя</span>
              <input
                className="profile__input"
                id="profile-input-name"
                type="text"
                placeholder={"Имя"}
                value={name || currentUser.name || ""}
                onChange={handleChangeName}
                disabled
              />
            </label>
            <span className='profile__input-error'>{nameError}</span>
            <label className="profile__label" htmlFor="profile-input-email">
              <span className="profile__input-caption">E-mail</span>
              <input
                className="profile__input"
                id="profile-input-email"
                type="email"
                placeholder="E-mail"
                value={email || currentUser.email || ""}
                onChange={handleChangeEmail}
                disabled
              />
            </label>
            <span className='profile__input-error'>{emailError}</span>
          </fieldset>
          <fieldset className="profile__handlers">
            <span className="profile__error-message">
              При обновлении профиля произошла ошибка.
            </span>
            <button className="profile__edit-button" onClick={handleEdit}>Редактировать</button>
            <button className="profile__submit-button button hide" type="submit" onClick={handleSubmit} disabled={!(isValidEmail && isValidName)}>
              Сохранить
            </button>
            <button className="profile__logout-button button" onClick={handleLogoutClick}>
              Выйти из аккаунта
            </button>
          </fieldset>
        </div>
      </div>
    </section>
  );
}
