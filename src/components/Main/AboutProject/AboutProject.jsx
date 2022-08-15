import React from 'react'
import './AboutProject.css'

export default function AboutProject() {
  return (
    <section className='about-project'>
        <div className="container">
            <h2 className="screen-heading">
            О проекте
            </h2>
            <div className="about-project__steps">
                <div className="about-project__step">
                    <div className="about-project__step-title">
                    Дипломный проект включал 5 этапов
                    </div>
                    <div className="about-project__step-text">
                    Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </div>
                </div>
                <div className="about-project__step">
                    <div className="about-project__step-title">
                    На выполнение диплома ушло 5 недель
                    </div>
                    <div className="about-project__step-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </div>
                </div>
            </div>
            <div className="about-project__duration">
                <div className="about-project__1week">1 неделя</div>
                <div className="about-project__4weeks">4 недели</div>
                <span className='about-project__text'>Back-end</span>
                <span className='about-project__text'>Front-end</span>
            </div>
        </div>
    </section>
  )
}
