import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

export default () => {
  return (
    <>
      <a href="https://twitter.com/techbytes208" target="_blank" className="border-2 rounded-full  px-3 py-3 border-alternateText hover:bg-alternateText">
        <FaTwitter className=" w-8 h-8" style={{ color: "white" }} />
      </a>
      <a href="https://www.facebook.com/shariq.anwar.391/" target="_blank" className="border-2 rounded-full  px-3 py-3 border-alternateText hover:bg-alternateText">
        <FaFacebook className=" w-8 h-8" style={{ color: "white" }} />
      </a>
      <a href="https://www.linkedin.com/in/shariqanwar20/" target="_blank" className="border-2 rounded-full  px-3 py-3 border-alternateText hover:bg-alternateText">
        <FaLinkedin className=" w-8 h-8" style={{ color: "white" }} />
      </a>
      <a href="https://github.com/shariqanwar20" target="_blank" className="border-2 rounded-full  px-3 py-3 border-alternateText hover:bg-alternateText">
        <FaGithub className=" w-8 h-8" style={{ color: "white" }} />
      </a>
    </>
  );
};
