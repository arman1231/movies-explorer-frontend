import React from "react";
import logo from "../../images/logo.svg";
import "./Register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="register">
        <div className="register__wrapper"></div>
      <img className="register__logo" src={logo} alt="logo" />
      <h1 className="register__heading">Добро пожаловать!</h1>
      <form className="register__form" action="#" onSubmit="" noValidate>
        <fieldset className="register__user-data">
        <label className="register__label" for='register-name'>Имя</label>
            <input className="register__input" type="text" name="name" id="register-name" minLength="2"
              maxLength="40"
              placeholder="Имя"
              value={''}
              onChange={'handleChangeEmail'}
              required/>

            <label className="register__label" for='register-email'>Email</label>
            <input className="register__input" type="email" name="email" id="register-email" minLength="2"
              maxLength="40"
              placeholder="pochta@yandex.ru"
              value={''}
              onChange={'handleChangeEmail'}
              required/>
              <label className="register__label" for='register-password'>Пароль</label>
              <input
              className="register__input"
              id="register-password"
              type="password"
              name="password"
              minLength="2"
              maxLength="200"
              placeholder="Пароль"
              value={'password || ""'}
              onChange={"handleChangePassword"}
              required
            />
        </fieldset>
        <fieldset className="register__handlers">
            <button className="register__submit" type="submit">Зарегистрироваться</button>
            <span className="register__login">Уже зарегистрированы?<Link to=''>Войти</Link></span>
        </fieldset>
      </form>
    </section>
  );
}
