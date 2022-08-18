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
                    <div className="promo__title">Учебный проект студента факультета Веб-разработки.</div>
                    <div className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</div>
                </div>
                <img className='promo__globe' src={globe} alt="logo" />
            </div>
            <Link to='' className="promo__button">
                Узнать больше
            </Link>
        </div>
    </section>
  )
}
