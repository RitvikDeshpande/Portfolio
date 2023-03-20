import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/picture1.png'
import IMG2 from '../../assets/picture2.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Performance Managment site: Performi ",
        github: 'https://github.com/RitvikDeshpande/Performi'
        // demo: 'https://dribbble.com/shots/20887623-Crypto-Trading-Complete-Landing-Page'
    }, 
    {
        id: 2,
        image: IMG2,
        title: "Portfolio",
        github: 'https://github.com/RitvikDeshpande/Portfolio'
        //demo: 'https://dribbble.com/shots/20887623-Crypto-Trading-Complete-Landing-Page'
    }
]

function portfolio() {
    return (
        <section id="projects">
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" target='_blank'>Github</a>
                                    {/* <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a> */}
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default portfolio
