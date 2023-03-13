import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Crypto Dashboard and Financial Visualizer",
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/20887623-Crypto-Trading-Complete-Landing-Page'
    }, 
    {
        id: 2,
        image: IMG2,
        title: "Project 2's title will be about the following:",
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/20887623-Crypto-Trading-Complete-Landing-Page'
    },
    {
        id: 3,
        image: IMG3,
        title: "Project 3's title will be about the following:",
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/20887623-Crypto-Trading-Complete-Landing-Page'
    },
    {
        id: 4,
        image: IMG4,
        title: "Project 4's title will be about the following:",
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/20887623-Crypto-Trading-Complete-Landing-Page'
    },
    {
        id: 5,
        image: IMG5,
        title: "Project 5's title will be about the following:",
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/20887623-Crypto-Trading-Complete-Landing-Page'
    },
    {
        id: 6,
        image: IMG6,
        title: "Project 6's title will be about the following:",
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/20887623-Crypto-Trading-Complete-Landing-Page'
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
                                    <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
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
