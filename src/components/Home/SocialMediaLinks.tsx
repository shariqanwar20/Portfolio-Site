import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import data from '../../../data.json'

export default () => {
  return (
    <>
      <a href={`${data.home.socialMedia.twitter}`} target="_blank" className="border-2 rounded-full  px-3 py-3 border-alternateText hover:bg-alternateText">
        <FaTwitter className="w-5 h-5 sm:w-8 sm:h-8" style={{ color: "white" }} />
      </a>
      <a href={`${data.home.socialMedia.facebook}`} target="_blank" className="border-2 rounded-full  px-3 py-3 border-alternateText hover:bg-alternateText">
        <FaFacebook className="w-5 h-5 sm:w-8 sm:h-8" style={{ color: "white" }} />
      </a>
      <a href={`${data.home.socialMedia.linkedin}`} target="_blank" className="border-2 rounded-full  px-3 py-3 border-alternateText hover:bg-alternateText">
        <FaLinkedin className="w-5 h-5 sm:w-8 sm:h-8" style={{ color: "white" }} />
      </a>
      <a href={`${data.home.socialMedia.github}`} target="_blank" className="border-2 rounded-full  px-3 py-3 border-alternateText hover:bg-alternateText">
        <FaGithub className="w-5 h-5 sm:w-8 sm:h-8" style={{ color: "white" }} />
      </a>
    </>
  );
};
