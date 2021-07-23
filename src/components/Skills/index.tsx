import React from "react";
import ProgressBar from "./ProgressBar";
import skills from "../../data/skills.json";

export default () => {
  return (
    <>
      <div className="flex-initial lg:grid lg:grid-cols-2 lg:block justify-center bg-primaryBg py-5 space-y-8">
        <div>
          <div className="font-sans text-alternateText pt-5 font-semibold w-full px-5 lg:m-auto lg:w-1/2">
            I'M EXPERT ON
          </div>
          <div className="pt-8">
            <div className="space-y-7 m-auto px-5 w-full lg:w-1/2">
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

        <div className="w-full px-5 space-y-4 py-12 lg:w-full lg:pr-10 lg:py-0" style={{ margin: "auto auto"}}>
          {skills.map((skill, i) => {
            return (
              <ProgressBar
                title={skill.skillName}
                progressPercentage={skill.progressPercentage}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
