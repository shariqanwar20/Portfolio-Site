import React from "react";
import Card from "./Card";
import Header from "./Header";
import services from "../../data/services.json";
import logo from '../../images/workflow-mark-indigo-500.svg'

export default () => {
  return (
    <div id="services">
      <div className="bg-primaryBg font-sans text-alternateText py-5 text-center font-semibold">
        SERVICES
      </div>
      <Header title="My Services" description={services[0].description} backgroundColor="primaryBg"/>
      <div className="flex flex-wrap bg-primaryBg justify-center">
        {services.map((service) => {
          return (
            <Card
              imgSrc={logo}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </div>
    </div>
  );
};
