import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import Header from "../Services/Header";

import {projects} from "../../../data.json";

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
    <div id="projects" className="bg-primaryBg py-10">
      <Header
        title={projects.header}
        description={projects.subHeader}
        backgroundColor="primaryBg"
      />
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {projects.projects.map((project) => {
          return (
            <Card
              imgSrc={project.logo}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          );
        })}
      </Carousel>
    </div>
  );
};
