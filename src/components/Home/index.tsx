import React from 'react';
import Navbar from '../Navbar' 
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsPlayFill } from 'react-icons/bs';
// import githubLogo from '../images/github-logo.png'

export default () => {
    return (
        <div>
            <Navbar />
            <div className="lg:grid lg:grid-cols-5 bg-secondaryBg pt-10" id="home">
                <div className="space-y-10 lg:col-span-3 mx-10 my-auto py-10">
                    <div className="flex flex-wrap space-x-4 pt-10">
                        <span className="border-2 rounded-full  px-3 py-3 border-alternateText hover:bg-alternateText">
                            <FaTwitter className=" w-8 h-8" style={{ color: "white"}} />
                        </span>
                        <span className="border-2 rounded-full  px-3 py-3 border-alternateText hover:bg-alternateText">
                            <FaFacebook className=" w-8 h-8" style={{ color: "white"}} />
                        </span>
                        <span className="border-2 rounded-full  px-3 py-3 border-alternateText hover:bg-alternateText">
                            <FaLinkedin className=" w-8 h-8" style={{ color: "white"}} />
                        </span>
                        <span className="border-2 rounded-full  px-3 py-3 border-alternateText hover:bg-alternateText">
                            <FaGithub className=" w-8 h-8" style={{ color: "white"}} />
                        </span>
                    </div>
                    <div className="font-extrabold text-6xl lg:text-7xl text-primaryText">
                        I am Shariq Anwar
                    </div>
                    <div className="font-semibold text-2xl text-secondaryText lg:w-2/3">
                        I'm Shariq, professional web developer with long time experience in this field​
                    </div>
                    <ul className="inline-flex">
                        <li>
                        <button className="py-4 px-4 text-lg md:text-xl md:px-10 text-center font-semibold rounded-full shadow-md text-primaryText border-2 border-alternateText hover:bg-alternateText">
                            My Projects
                        </button>
                        </li>
                        <li className="m-auto px-10">
                        <button className="py-3 px-9 text-xl text-center font-semibold rounded-full shadow-md text-primaryText border-2 hover:border-alternateText bg-alternateText">
                            <BsPlayFill className="w-8 h-8" style={{ color: "white" }} />
                        </button>
                        </li>
                    </ul>
                </div>
                <img className="hidden lg:block lg:mx-auto lg:col-span-2" src="https://themebing.com/html/amike/assets/images/man-01.png" alt="Profile Picture" />
            </div>
        </div>
    );
}