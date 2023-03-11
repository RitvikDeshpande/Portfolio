import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}

export default App

