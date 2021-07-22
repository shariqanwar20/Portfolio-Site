import React from 'react';
import Navbar from '../components/Navbar' 
import Card from '../components/Card'
import Header from '../components/Header'
import ProgressBar from '../components/ProgressBar';
import Skills from './skills';
// import githubLogo from '../images/github-logo.png'

export default () => {
    return (
        <>
            <Navbar />
            {/* <Skills /> */}
            {/* <ProgressBar progressPercentage={70} title="NodeJs"/> */}
            {/* <Header backgroundColor="primaryBg" title="Web Development" description="Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"/> */}
            {/* <Card imgSrc={githubLogo} title="Web Development" description="Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"/> */}
        </>
    );
}