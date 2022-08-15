import React from "react";
import myself from "../../../images/myself.jpeg";
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
            Born in Erevan, Armenia.  Now based in LA. I majored in Coputer Sience in MESI. Got wife and baby daugther. Love to play chess and jog occasionaly. Started coding back in 2008. Mainly got freelance experiece.
            </span>
            <div className="about-me__social">
                <span className="about-me__facebook">Facebook</span>
                <span className="about-me__github">Github</span>
            </div>
          </div>
          <img className="about-me__picture" src={myself} alt="student" />
        </div>
      </div>
    </section>
  );
}
