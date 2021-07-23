import React from "react";
import Card from "./Card";
import Header from "./Header";
import services from "../../data/services.json";

export default () => {
  return (
    <>
      <div className="bg-primaryBg font-sans text-alternateText py-5 text-center font-semibold">
        SERVICES
      </div>
      <Header title="My Services" description={services[0].description} backgroundColor="primaryBg"/>
      <div className="flex flex-wrap bg-primaryBg justify-center">
        {services.map((service) => {
          return (
            <Card
              imgSrc={service.imgSrc}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </div>
    </>
  );
};
