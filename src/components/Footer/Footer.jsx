import React from "react";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  function defineClassName() {
    let footerClass = "";
    switch (location.pathname) {
      case "/signin":
        footerClass = "hide";
        return footerClass;
      case "/signup":
        footerClass = "hide";
        return footerClass;
      case "/profile":
        footerClass = "hide";
        return footerClass;
      case "/":
        footerClass = "footer";
        return footerClass;
      default:
        footerClass = "footer";
        return footerClass;
    }
  }
  const currentDate = new Date().getFullYear();
  return (
    <footer className={defineClassName()}>
      <div className="container">
        <h3 className="footer__heading">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <nav className="footer__nav">
          <span className="footer__copy">&copy; {currentDate}</span>
          <ul className="footer__list">
            <li className="footer__listitem">
              <Link className="footer__link link" to={{ pathname: 'https://practicum.yandex.ru/' }} target="_blank">
                Яндекс.Практикум
              </Link>
            </li>
            <li className="footer__listitem">
              <Link className="footer__link link" to={{ pathname: 'https://github.com/arman1231' }} target="_blank">
                Github
              </Link>
            </li>
            {/* <li className="footer__listitem">
              <Link className="footer__link" to={{ pathname: 'https://practicum.yandex.ru/web/' }} target="_blank">
                Facebook
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
