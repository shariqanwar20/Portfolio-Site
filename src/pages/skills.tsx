import React from "react";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import skills from '../data/skills.json'

export default () => {
  return (
    <>
      <Navbar />

      <div className="flex-initial lg:grid lg:grid-cols-2 lg:block justify-center bg-primaryBg py-5 space-y-8">
        <div>
          <div className="font-sans text-alternateText pt-5 font-semibold m-auto w-1/2">
            I'M EXPERT ON
          </div>
          <div className="pt-8">
            <div className="space-y-7 m-auto w-1/2">
              <h4 className="text-4xl text-primaryText font-sans font-bold">
                Let's Work Together
              </h4>
              <p className="text-secondaryText text-lg">
                Phasellus accumsan scelerisque dolor, quis mattis justo bibendum
                non. Nulla sollicitudin turpis in elementum varius. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae
              </p>
              <button className="py-2 px-4 m-auto font-semibold rounded-full shadow-md text-primaryText border-2 border-alternateText hover:bg-alternateText">
                Hire Me Now
              </button>
            </div>
          </div>
        </div>

        <div className="m-auto w-1/2 space-y-4 lg:w-full">
            {skills.map((skill, i) => {
                return(
                    <ProgressBar title={skill.skillName} progressPercentage={skill.progressPercentage} key={i}/>
                )
            })}
        </div>
      </div>
    </>
  );
};
