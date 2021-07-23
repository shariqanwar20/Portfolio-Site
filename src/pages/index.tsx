import React from 'react';
import Home from '../components/Home';
import Services from '../components/Services';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

export default () => {
    return (
        <>
            <Home />
            <Services />
            <About />
            <Skills />
            {/* Projects */}
            <Projects />
            {/* Experience Bar */}
            <Experience />
            <Contact />
            {/* footer */}
            <Footer />
        </>
    );
}