import React from 'react'
import './skills.css'

import html from '../skills/html.png'
import css from '../skills/css.png'
import bootstrap from '../skills/bootstrap.png'
import javascript from '../skills/javascript.png'
import react from '../skills/react.png'
import firebase from '../skills/firebase.png'
import github from '../skills/github.png'
import nodejs from '../skills/nodejs.png'
import mongodb from '../skills/mongodb.png'
import sql from '../skills/sql.png'


export const Skills = () => {
    return (
        <div>

            <section class="skills-section" id='skills'>
                <h2 class="title">SKILLS</h2>
                <div class="skills-grid">
                    <div class="skill"><img src={html} alt="HTML"/><p>HTML</p></div>
                    <div class="skill"><img src={css} alt="CSS"/><p>CSS</p></div>
                    <div class="skill"><img src={bootstrap} alt="Bootstrap"/><p>Bootstrap</p></div>
                    <div class="skill"><img src={javascript}alt="JavaScript"/><p>Javascript</p></div>
                    <div class="skill"><img src={react} alt="React"/><p>React</p></div>

                    <div class="skill"><img src={react} alt="React"/><p>Go</p></div>
                    <div class="skill"><img src={html} alt="HTML"/><p>Java</p></div>
                    <div class="skill"><img src={css} alt="CSS"/><p>Spring Boot</p></div>
                    <div class="skill"><img src={bootstrap} alt="Bootstrap"/><p>Hibernate</p></div>
                    <div class="skill"><img src={javascript}alt="JavaScript"/><p>AWS</p></div>
                  

                    <div class="skill"><img src={html} alt="HTML"/><p>Jenkins</p></div>
                    <div class="skill"><img src={css} alt="CSS"/><p>Docker</p></div>
                    <div class="skill"><img src={bootstrap} alt="Bootstrap"/><p>Kubernates</p></div>
                    <div class="skill"><img src={javascript}alt="JavaScript"/><p>ArgoCD</p></div>
                    <div class="skill"><img src={react} alt="React"/><p>Kafka</p></div>

                    <div class="skill"><img src={firebase} alt="Firebase"/><p>Firebase</p></div>
                    <div class="skill"><img src={github} alt="GitHub"/><p>Git-Hub</p></div>
                    <div class="skill"><img src={nodejs} alt="Node JS"/><p>Node JS</p></div>
                    <div class="skill"><img src={mongodb} alt="MongoDB"/><p>Mongo DB</p></div>
                    <div class="skill"><img src={sql} alt="MySQL"/><p>MySQL</p></div>
                </div>
            </section>
        </div>
    )
}
