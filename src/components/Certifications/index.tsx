import React from "react";
import Card from "./Card";
import Header from "../Services/Header";

import data from "../../../data.json";
import Carousel from "react-multi-carousel";

export default () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div id="certifications" className="bg-primaryBg">
      <div className="bg-primaryBg font-sans text-alternateText py-5 text-center font-semibold">
        CERTIFICATIONS
      </div>
      <Header
        title={data.certifications.header}
        description={data.certifications.subHeader}
        backgroundColor="primaryBg"
      />
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={false}
        autoPlay={false}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.certifications.certificates.map((certificate) => {
          return (
            <Card
              imgSrc={certificate.image}
              title={certificate.title}
              description={certificate.description}
            />
          );
        })}
      </Carousel>
    </div>
  );
};
