import React from 'react';
import { Link } from 'react-router-dom';
import arrow from "../../images/arrow.svg";
import "./Portfolio.css"

export default function Portfolio() {
  return (
    <section className='portfolio'>
        <div className="container">
            <h2 className='portfolio__heading'>Портфолио</h2>
            <Link to={{ pathname: 'https://github.com/arman1231/how-to-learn' }} target="_blank" className='portfolio__item link'>
                <span className="portfolio__site">Статичный сайт</span>
                <img className='portfolio__arrow' src={arrow} alt="arrow" />
            </Link>
            <Link to={{ pathname: 'https://github.com/arman1231/russian-travel' }} target="_blank" className='portfolio__item link'>
                <span className="portfolio__site">Адаптивный сайт</span>
                <img className='portfolio__arrow' src={arrow} alt="arrow" />
            </Link>
            <Link to={{ pathname: 'https://github.com/arman1231/react-mesto-api-full' }} target="_blank" className='portfolio__item link'>
                <span className="portfolio__site">Одностраничное приложение</span>
                <img className='portfolio__arrow' src={arrow} alt="arrow" />
            </Link>
        </div>
    </section>
  )
}
