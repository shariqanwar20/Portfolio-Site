import React from "react";
import Card from "./Card";
import Header from "./Header";
import logo from "../../images/workflow-mark-indigo-500.svg";
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
    <div id="services" className="bg-primaryBg">
      <div className="font-sans text-alternateText py-5 text-center font-semibold">
        EXPERIENCES
      </div>
      <Header
        title={data.experience.header}
        description={data.experience.subHeader}
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
          {data.experience.experiences.map((experience) => {
            return (
              <Card
                imgSrc={experience.logo ? experience.logo : logo}
                title={experience.title}
                description={experience.description}
              />
            );
          })}
        </Carousel>
    </div>
  );
};
