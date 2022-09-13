import React from "react";
import logo from "../../images/logo.svg";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login({ handleLoginSubmit, isLoggedIn, responseMessage }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [isValidPassword, setIsValidPassword] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleLoginSubmit(email, password);
    setEmail("");
    setPassword("");
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
  return (
    <section className="login">
      <div className="login__wrapper"></div>
      <Link to="/">
        <img className="login__logo" src={logo} alt="logo" />
      </Link>
      <h1 className="login__heading">Рады видеть!</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <fieldset className="login__user-data">
        <label className="login__label" htmlFor="login-email">
            Email
          </label>
          <input
            className="login__input"
            type="email"
            name="email"
            id="login-email"
            minLength="2"
            maxLength="40"
            placeholder="pochta@yandex.ru"
            value={email || ""}
            onChange={handleChangeEmail}
            required
          />
          <span className='login__input-error'>{emailError}</span>
          <label className="login__label" htmlFor="login-password">
            Пароль
          </label>
          <input
            className="login__input"
            id="login-password"
            type="password"
            name="password"
            minLength="2"
            maxLength="200"
            placeholder="Пароль"
            value={password || ""}
            onChange={handleChangePassword}
            required
          />
          <span className="login__input-error">{passwordError}</span>
          <span className='login__response-message'>{responseMessage}</span>
        </fieldset>
        <fieldset className="login__handlers">
        <button className="register__submit button" type="submit" disabled={!(isValidEmail && isValidPassword)}>
            Войти
          </button>
          <span className="login__login">
            Ещё не зарегистрированы? &nbsp;
            <Link to="/signup" className="login__login-link link">
              Регистрация
            </Link>
          </span>
        </fieldset>
      </form>
    </section>
  );
}
