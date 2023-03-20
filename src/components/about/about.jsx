import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaUniversity} from 'react-icons/fa'
import {MdWorkHistory} from 'react-icons/md'
import {FaAward} from 'react-icons/fa'

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
                            <h5> McMaster University</h5>
                            {/* <small>McMaster University</small> */}
                        </article>

                        <article className="about__card">
                            <MdWorkHistory className="about__icon"/>
                            <h5>3 co-op terms</h5>
                            {/* <small>McMaster University</small> */}
                        </article>

                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>3.7 GPA</h5>
                            {/* <small>McMaster University</small> */}
                        </article>
                    </div>

                    <p className='paragraph'>
                        I'm a 3rd year Computer Science major attending McMaster University. Over the 
                        last 3 years, I've worked as a software developer intern at 3 companies, gaining experience doing web development, DevOps, and working on 
                        embedded systems. Let's connect to discuss opportunities to solve new and exciting software problems!
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default about
