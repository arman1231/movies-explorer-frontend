import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../images/arrow.svg";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <h2 className="portfolio__heading">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            {" "}
            <Link
              to={{ pathname: "https://github.com/arman1231/how-to-learn" }}
              target="_blank"
              className="portfolio__link portfolio__link_underline link"
            >
              <span className="portfolio__site">Статичный сайт</span>
              <img className="portfolio__arrow" src={arrow} alt="arrow" />
            </Link>
          </li>
          <li className="portfolio__item">
            <Link
              to={{ pathname: "https://github.com/arman1231/russian-travel" }}
              target="_blank"
              className="portfolio__link portfolio__link_underline link"
            >
              <span className="portfolio__site">Адаптивный сайт</span>
              <img className="portfolio__arrow" src={arrow} alt="arrow" />
            </Link>
          </li>
          <li className="portfolio__item">
            <Link
              to={{
                pathname: "https://github.com/arman1231/react-mesto-api-full",
              }}
              target="_blank"
              className="portfolio__link link"
            >
              <span className="portfolio__site">Одностраничное приложение</span>
              <img className="portfolio__arrow" src={arrow} alt="arrow" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
