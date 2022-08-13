import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import globe from '../../images/globe.svg'


export default function Header() {
  return (
    <header className='header'>
        <div className='container'>
            <nav className='header__navigation'>
                <Link to=''><img className='header__logo' src={logo} alt="logo" /></Link>
                <div className='header__links'>
                    <Link to='' className='header__link'>Регистрация</Link>
                    <Link to='' className='header__link_green'>Войти</Link>
                </div>
            </nav>
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
    </header>
  )
}
