import React from "react";
import { Link } from "react-router-dom";
import myself from "../../images/myself.jpeg";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="container">
        <h2 className="screen-heading">Student</h2>
        <div className="about-me__content">
          <div className="about-me__info">
            <h3 className="about-me__heading">Arman</h3>
            <span className="about-me__subtitle">
              Frontend Software Engineer, 31 
            </span>
            <span className="about-me__about">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </span>
            <div className="about-me__social">
                {/* <Link className="about-me__link">Facebook</Link> */}
                <Link  to={{ pathname: 'https://github.com/arman1231' }} target="_blank" className="about-me__link link">Github</Link>
            </div>
          </div>
          <img className="about-me__picture" src={myself} alt="student" />
        </div>
      </div>
    </section>
  );
}
