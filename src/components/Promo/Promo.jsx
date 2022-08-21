import React from 'react';
import "./Promo.css";
import { Link } from 'react-router-dom';
import globe from '../../images/globe.svg';

export default function Promo() {
  return (
    <section className="promo">
        <div className="container">
        <div className='promo__content'>
                <div className="promo_text">
                    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                    <span className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</span>
                </div>
                <img className='promo__globe' src={globe} alt="logo" />
            </div>
            <Link to={{ pathname: 'https://practicum.yandex.ru/web/' }} target="_blank" className="promo__button link">
                Узнать больше
            </Link>
        </div>
    </section>
  )
}
