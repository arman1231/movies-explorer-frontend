import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import AboutProject from './AboutProject/AboutProject';
import './Main.css'
import Portfolio from './Portfolio/Portfolio';
import Techs from './Techs/Techs';

export default function Main() {
  return (
    <main className='main'>
        <AboutProject></AboutProject>
        <Techs></Techs>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
    </main>
  )
}
