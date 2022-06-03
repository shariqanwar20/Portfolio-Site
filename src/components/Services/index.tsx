import React from "react";
import Card from "./Card";
import Header from "./Header";
import logo from '../../images/workflow-mark-indigo-500.svg'
import data from '../../../data.json'

export default () => {
  return (
    <div id="services">
      <div className="bg-primaryBg font-sans text-alternateText py-5 text-center font-semibold">
        EXPERIENCES
      </div>
      <Header title={data.experience.header} description={data.experience.subHeader} backgroundColor="primaryBg"/>
      <div className="flex flex-wrap bg-primaryBg justify-center">
        {data.experience.experiences.map((experience) => {
          return (
            <Card
              imgSrc={experience.logo? experience.logo : logo}
              title={experience.title}
              description={experience.description}
            />
          );
        })}
      </div>
    </div>
  );
};
