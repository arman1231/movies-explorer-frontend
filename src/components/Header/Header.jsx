import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';

export default function Header() {
  return (
    <header className='header'>
        <div className='container'>
            <nav className='header__navigation'>
                <Link to=''><img className='header__logo' src={logo} alt="logo" /></Link>
                <div className='header__links'>
                    <Link to='/signup' className='header__link'>Регистрация</Link>
                    <Link to='/signin' className='header__link_green'>Войти</Link>
                </div>
            </nav>

        </div>
    </header>
  )
}
