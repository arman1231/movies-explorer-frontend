import React from 'react';
import "./Promo.css";
import { Link } from 'react-router-dom';
import globe from '../../images/globe.svg'

export default function Promo() {
  return (
    <section className="promo">
        <div className="container">
        <div className='header__content'>
                <div className="header_text">
                    <div className="header__title">Учебный проект студента факультета Веб-разработки.</div>
                    <div className="header__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</div>
                </div>
                <img className='header__globe' src={globe} alt="logo" />
            </div>
            <Link to='' className="header__button">
                Узнать больше
            </Link>
        </div>
    </section>
  )
}
