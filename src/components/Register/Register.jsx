import React from "react";
import logo from "../../images/logo.svg";
import "./Register.css";
import { Link, Redirect } from "react-router-dom";

export default function Register({ handleRegisterSubmit, isLoggedIn, responseMessage }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [isValidPassword, setIsValidPassword] = React.useState(false);
  const [isValidName, setIsValidName] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
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

  function handleChangePassword(e) {
    const input = e.target;
    setPassword(input.value);
    setIsValidPassword(input.validity.valid);
    if (!isValidPassword) {
      setPasswordError(input.validationMessage);
    } else {
      setPasswordError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRegisterSubmit(email, password, name);
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <section className="register">
      <div className="register__wrapper"></div>
      <Link to="/">
        <img className="register__logo" src={logo} alt="logo" />
      </Link>
      <h1 className="register__heading">Добро пожаловать!</h1>
      <form className="register__form" onSubmit={handleSubmit}>
        <fieldset className="register__user-data">
          <label className="register__label" htmlFor="register-name">
            Имя
          </label>
          <input
            className="register__input"
            type="text"
            name="name"
            id="register-name"
            minLength="2"
            maxLength="40"
            placeholder="Имя"
            value={name || ""}
            onChange={handleChangeName}
            required
          />
          <span className='register__input-error'>{nameError}</span>
          <label className="register__label" htmlFor="register-email">
            Email
          </label>
          <input
            className="register__input"
            type="email"
            name="email"
            id="register-email"
            minLength="2"
            maxLength="40"
            placeholder="pochta@yandex.ru"
            value={email || ""}
            onChange={handleChangeEmail}
            required
          />
          <span className='register__input-error'>{emailError}</span>
          <label className="register__label" htmlFor="register-password">
            Пароль
          </label>
          <input
            className="register__input"
            id="register-password"
            type="password"
            name="password"
            minLength="2"
            maxLength="200"
            placeholder="Пароль"
            value={password || ""}
            onChange={handleChangePassword}
            required
          />
          <span className="register__input-error">{passwordError}</span>
          <span className='register__response-message'>{responseMessage}</span>
        </fieldset>
        <fieldset className="register__handlers">
          <button className="register__submit button" type="submit" disabled={!(isValidEmail && isValidPassword && isValidName)}>
            Зарегистрироваться
          </button>
          <span className="register__login">
            Уже зарегистрированы?{" "}
            <Link className="register__login-link link" to="/signin">
              Войти
            </Link>
          </span>
        </fieldset>
      </form>
    </section>
  );
}