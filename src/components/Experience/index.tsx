import React from "react";
import { IoIosPeople } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";
import { FaGem, FaGithub } from "react-icons/fa";
import Card from "./Card";

export default () => {
  return (
    <div id="experience">
      <div className="bg-secondaryBg flex flex-col items-center px-40 md:grid md:grid-cols-2 lg:grid-cols-4 py-20">
        <Card
          icon={
            <IoIosPeople
              className="w-20 h-20 mx-auto"
              style={{ color: "white" }}
            />
          }
          value={47}
          title="Clients"
        />
        <Card
          icon={
            <AiFillProject
              className="w-20 h-20 mx-auto"
              style={{ color: "white" }}
            />
          }
          value={15}
          title="Projects"
        />
        <Card
          icon={
            <FaGem className="w-20 h-20 mx-auto" style={{ color: "white" }} />
          }
          value={50}
          title="Awards"
        />
        <Card
          icon={
            <FaGithub
              className="w-20 h-20 mx-auto"
              style={{ color: "white" }}
            />
          }
          value={2}
          title="Experience"
        />
      </div>
    </div>
  );
};
