import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function footer() {
    return (
        <footer>
            <a href="#" className='footer__logo'>RITVIK</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/ritvik-deshpande/" target="_blank"><BsLinkedin/></a>
                <a href="https://github.com/RitvikDeshpande/" target="_blank"><FaGithub/></a>
            </div>
        </footer>
    )
}

export default footer
