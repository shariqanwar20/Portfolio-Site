import React from 'react';
import Home from '../components/Home';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';

export default () => {
    return (
        <>
            <Home />
            <Certifications />
            <Services />
            <About />
            {/* <Skills /> */}
            <Projects />
            {/* <Experience /> */}
            <Contact />
            <Footer />
        </>
    );
}