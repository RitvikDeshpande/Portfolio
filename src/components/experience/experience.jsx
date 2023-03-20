import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experience = () => {
    return (
        <section id="experience">
            <h5>The Skills I have</h5>
            <h2>My Skills</h2>

            <div className="container experience__container">
                <div className="programming">
                    <h3>Programming</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Java</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>SQL</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>C</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>C++</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF FRONTEND*/}

                <div className="experience__backend">
                    <h3>Libraries/Framework</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>OOP Principles</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>JUnit</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>JQuery</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>NodeJS</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>React</h4>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Tools/Platforms</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Git</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Postman</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Dynatrace</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>PRTG</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Heroku</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>MongoDB</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Visual Studio IDE</h4>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default experience
