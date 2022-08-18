import React from 'react';
import arrow from "../../images/arrow.svg";
import "./Portfolio.css"

export default function Portfolio() {
  return (
    <section className='portfolio'>
        <div className="container">
            <h2 className='portfolio__heading'>Портфолио</h2>
            <div className='portfolio__item'>
                <span className="portfolio__site">Статичный сайт</span>
                <img className='portfolio__arrow' src={arrow} alt="arrow" />
            </div>
            <div className='portfolio__item'>
                <span className="portfolio__site">Адаптивный сайт</span>
                <img className='portfolio__arrow' src={arrow} alt="arrow" />
            </div>
            <div className='portfolio__item'>
                <span className="portfolio__site">Одностраничное приложение</span>
                <img className='portfolio__arrow' src={arrow} alt="arrow" />
            </div>
        </div>
    </section>
  )
}
