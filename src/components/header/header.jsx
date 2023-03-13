import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/me.v1.png'
//import ME from '../../assets/me_copy.png'
import HeaderSocial from './HeaderSocials'

function header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Ritvik Deshpande</h1>
                <h5 className="text-light">Software Developer</h5>
                <CTA />
                <HeaderSocial/>

                <div className="me">
                    <img id="pictureSize" src={ME} alt="me"/>
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default header
