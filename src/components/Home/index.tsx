import React from "react";
import Navbar from "../Navbar";
import { BsPlayFill } from "react-icons/bs";
import SocialMediaLinks from "./SocialMediaLinks";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default () => {
  return (
    <div>
      <Navbar />
      <div className="lg:grid lg:grid-cols-5 bg-secondaryBg pt-10" id="home">
        <div className="space-y-10 lg:col-span-3 mx-10 my-auto py-10">
          <div className="flex flex-wrap space-x-4 pt-10">
            <SocialMediaLinks />
          </div>
          <div className="font-extrabold text-6xl lg:text-7xl text-primaryText">
            I am Shariq Anwar
          </div>
          <div className="font-semibold text-2xl text-secondaryText lg:w-2/3">
            I'm Shariq, professional full stack serverless developer with long time experience in
            this field​
          </div>
          <ul className="inline-flex">
            <li className="m-auto w-max">
              <AnchorLink
                to="/#projects"
                className="py-4 px-4 text-md sm:text-lg md:text-xl md:px-10 text-center font-semibold rounded-full shadow-md text-primaryText border-2 border-alternateText hover:bg-alternateText"
              >
                My Projects
              </AnchorLink>
            </li>
            <li className="m-auto px-6 sm:p-10">
              <a
                href="https://www.youtube.com/channel/UCe4D1fLsJzgbsOHGMd7LGYg"
                target="_blank"
              >
                <button className="py-3 px-3 sm:px-9 text-xl text-center font-semibold rounded-full shadow-md text-primaryText border-2 hover:border-alternateText bg-alternateText">
                  <BsPlayFill className="w-8 h-8" style={{ color: "white" }} />
                </button>
              </a>
            </li>
          </ul>
        </div>
        <img
          className="hidden lg:block lg:mx-auto lg:col-span-2"
          src="https://themebing.com/html/amike/assets/images/man-01.png"
          alt="Profile Picture"
        />
      </div>
    </div>
  );
};
