import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaUniversity} from 'react-icons/fa'

const about = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaUniversity className="about__icon"/>
                            <h5>University</h5>
                            <small>McMaster University</small>
                        </article>

                        <article className="about__card">
                            <FaUniversity className="about__icon"/>
                            <h5>University</h5>
                            <small>McMaster University</small>
                        </article>

                        <article className="about__card">
                            <FaUniversity className="about__icon"/>
                            <h5>University</h5>
                            <small>McMaster University</small>
                        </article>
                    </div>

                    <p>
                        Problem solving is what I do best! 
                        Whether that be breaking down complex concepts to my tutoring
                        students or using my knowledge of the Software Development Life Cycle 
                        to efficiently create new personal coding projects. 
                        As a third-year computer science student at McMaster University, 
                        I’m actively looking for fall 2023 internships where I can put my
                        problem-solving skils to good use.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default about
