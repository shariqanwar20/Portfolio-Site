import React from "react";
import Card from "./Card";
import Header from "../Services/Header";

import { certifications } from '../../../data.json'

export default () => {
  return (
    <div id="certifications">
      <div className="bg-primaryBg font-sans text-alternateText py-5 text-center font-semibold">
        CERTIFICATIONS
      </div>
      <Header title={certifications.header} description={certifications.subHeader} backgroundColor="primaryBg"/>
      <div className="flex flex-wrap bg-primaryBg justify-center">
        {certifications.certificates.map((certificate) => {
          return (
            <Card
              imgSrc={certificate.image}
              title={certificate.title}
              description={certificate.description}
            />
          );
        })}
      </div>
    </div>
  );
};
