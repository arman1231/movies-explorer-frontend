import React from 'react';
import './Techs.css';

export default function Techs() {
  return (
    <section className='techs'>
        <div className="container">
            <h2 className="screen-heading">
                Технологии  
            </h2>
            <h3 className='techs__caption'>
            7 технологий
            </h3>
            <div className="techs__text">
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </div>
            <ul className="techs__list">
                <li className='techs__listitem'>HTML</li>
                <li className='techs__listitem'>CSS</li>
                <li className='techs__listitem'>JS</li>
                <li className='techs__listitem'>React</li>
                <li className='techs__listitem'>Git</li>
                <li className='techs__listitem'>Express.js</li>
                <li className='techs__listitem'>mongoDB</li>
            </ul>
        </div>
    </section>
  )
}
