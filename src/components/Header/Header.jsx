import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import accountIcon from "../../images/account-icon.svg";
import Navigation from "../Navigation/Navigation";

export default function Header({ isLoggedIn }) {
  const location = useLocation();
  function defineClassName() {
    let headerClass = "";
    switch (location.pathname) {
      case "/signin":
        headerClass = "hide";
        return headerClass;
      case "/signup":
        headerClass = "hide";
        return headerClass;
      case "/":
        headerClass = "header header_index-page";
        // isLoggedIn ? headerClass = "header" : headerClass = "header header_index-page";
        return headerClass;
      default:
        headerClass = "header";
        return headerClass;
    }
  }

  function showBurger() {
    document.querySelector(".header__burger").classList.toggle("active");
    document.querySelector(".header__links").classList.toggle("active");
  }

  return (
    <header 
    // className="header"
      className={
        defineClassName()
        // location.pathname === "/" ? "header header_index-page" : "header"
      }
    >
      <div className="container">
        <nav className="header__navigation">
          {isLoggedIn ? (
            <>
              <Link className="header__logo link" to="/" onClick={showBurger}>
                <img src={logo} alt="logo" />
              </Link>
              <div className="header__burger" onClick={showBurger}>
                <span></span>
              </div>
              <Navigation>
                <div className="header__links-to-movies">
                  <Link
                    to="/"
                    className="header__link header__link_to-main link"
                    onClick={showBurger}
                  >
                    Главная
                  </Link>
                  <Link to="/movies" className="header__link link" onClick={showBurger}>
                    Фильмы
                  </Link>
                  <Link to="/saved-movies" className="header__link link" onClick={showBurger}>
                    Сохранённые фильмы
                  </Link>
                </div>
                <Link className="header__account link" to="/profile" onClick={showBurger}>
                  Аккаунт{" "}
                  <img
                    className="header__account-icon"
                    src={accountIcon}
                    alt="вход в аккаунт"
                  />
                </Link>
              </Navigation>
            </>
          ) : (
            <>
              <Link className="header__logo link" to="/" onClick={showBurger}>
                <img src={logo} alt="logo" />
              </Link>
              <div className="header__burger" onClick={showBurger}>
                <span></span>
              </div>
              <Navigation>
                <div className="header__links-to-movies">
                  <Link to="/signup" className="header__link link" onClick={showBurger}>
                    Регистрация
                  </Link>
                  <Link to="/signin" className="header__link_green link" onClick={showBurger}>
                    Войти
                  </Link>
                </div>
              </Navigation>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
