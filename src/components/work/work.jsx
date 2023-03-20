import React from 'react'
import './work.css'
import {useState} from 'react'

const data = [
    {
        id: 1,
        company_location: "May 2022 - Aug 2022",
        title_time: "Platform Reliability Engineer @ Manulife",
        description: 'random decscription here',
        section_id: 'manulife'
    }, 
    {
        id: 2,
        company_location: "May 2021 - July 2021",
        title_time: "Web Developer @ Counting Opinions ",
        description: 'random decscription here',
        section_id: 'counting_opinions'
    },
    {
        id: 3,
        company_location: "May 2023 - Aug 2023",
        title_time: "Embedded Systems Engineer @ Horiba ",
        description: 'horiba description here',
        section_id: 'horiba'
    }
]

const Work = () => {
    const [activeNav, setActiveNav] = useState('#horiba');
    const [activeDiv, setActiveDiv] = useState('horiba');

    const manulifeUpdate = () => {
        setActiveDiv('manulife');
        setActiveNav('#manulife');
    };

    const cpUpdate = () => {
        setActiveDiv('counting_opinions');
        setActiveNav('#counting_opinions');
    };

    const horibaUpdate = () => {
        setActiveDiv('horiba');
        setActiveNav('#horiba');
    };


    return (

        <section id="work">
            <h5>My Recent Work</h5>
            <h2>Work Experience</h2>

            <div className="container work__container">

                <div className="left">
                    <nav className="work__nav">
                        <a href="#horiba" onClick={horibaUpdate} className={activeNav === '#horiba' ? 'active' : ''}>Horiba</a>
                        <a href="#manulife" onClick={manulifeUpdate} className={activeNav === '#manulife' ? 'active' : ''}>Manulife</a>
                        <a href="#counting_opinions" onClick={cpUpdate} className={activeNav === '#counting_opinions' ? 'active' : ''}>Counting Opinions</a>
                    </nav>
                </div>


                <div className="right">

                    {activeDiv === 'horiba' && 
                        <div className="work__item">
                            <h2>{data[2].title_time}</h2>
                            <h3>{data[2].company_location}</h3>
                            <ul>
                                <li>Will participate in the upgrade of existing real-time software components to meet requirements of new product architecture</li>
                                <li>Will identify the necessary modifications for improving the instrumentation and update documentation as required </li>
                            </ul>   
                        </div>
                    }

                    {activeDiv === 'manulife' && 
                        <div className="work__item">
                            <h2>{data[0].title_time}</h2>
                            <h3>{data[0].company_location}</h3>
                            <ul>
                                <li>Worked in an agile environment to create the front-end and back-end for a Dashboard Checker application using react.js, node.js</li>
                                <li>Created documentation for the Dashboard Checker's REST API using swagger.io</li>
                                <li>Used application monitoring softwares such as Dynatrace, New Relic and PRTG to ensure that the required SLOs were met</li>
                                <li>Created custom PowerShell scripts to manage the health and performance of Manulife applications</li>
                            </ul>
                            {/* <p>{data[0].description}</p> */}
                        </div>
                    }

                    {activeDiv === 'counting_opinions' && 
                        <div className="work__item">
                            <h2>{data[1].title_time}</h2>
                            <h3>{data[1].company_location}</h3>
                            <ul>
                                <li>Used JavaScript and MySQL to aggregate data for a reference tracker app for Librarians </li>
                                <li>Designed the home screen for the reference tracker using UI tools such as HTML, CSS, JavaScript and proto.io</li>
                            </ul>
                        </div>
                    }

                </div>


            </div>

        </section>
    )
}

export default Work

/**                 {
                    data.map(({id, company_location, title_time, description, section_id}) => {
                        return (
                            <article key={id} className="work__item" id={section_id}>
                                <h3>{title_time}</h3>
                                <h2>{company_location}</h2>
                                <p>{description}</p>
                            </article>
                        )
                    })
                } */
