import React from 'react';
import AboutProject from './AboutProject/AboutProject';
import './Main.css'
import Techs from './Techs/Techs';

export default function Main() {
  return (
    <main className='main'>
        <AboutProject></AboutProject>
        <Techs></Techs>
    </main>
  )
}
