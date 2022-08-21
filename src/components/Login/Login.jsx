import React from "react";
import logo from "../../images/logo.svg";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="login">
      <div className="login__wrapper"></div>
      <Link to="/">
        <img className="register__logo" src={logo} alt="logo" />
      </Link>
      <h1 className="login__heading">Рады видеть!</h1>
      <form className="login__form" action="#" onSubmit="" noValidate>
        <fieldset className="login__user-data">
          <label className="login__label" for="login-email">
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
            value={""}
            onChange={"handleChangeEmail"}
            required
          />
          <label className="login__label" for="login-password">
            Пароль
          </label>
          <input
            className="login__input"
            id="login-password"
            type="password"
            name="password"
            minLength="2"
            maxLength="200"
            placeholder=""
            value={""}
            onChange={"handleChangePassword"}
            required
          />
          {/* <span className="login__input-error">Что-то пошло не так...</span> */}
        </fieldset>
        <fieldset className="login__handlers">
          <button className="login__submit button" type="submit">
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
