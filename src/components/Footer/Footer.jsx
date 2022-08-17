import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <footer className='footer'>
        <div className="container">
            <h3 className='footer__heading'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <nav className='footer__nav'>
                <span className='footer__copy'>© {currentDate}</span>
                <ul className='footer__list'>
                    <li className='footer__listitem'><Link className='footer__link' to=''>Яндекс.Практикум</Link></li>
                    <li className='footer__listitem'><Link className='footer__link' to=''>Github</Link></li>
                    <li className='footer__listitem'><Link className='footer__link' to=''>Facebook</Link></li>
                </ul>
            </nav>
        </div>
    </footer>
  )
}
