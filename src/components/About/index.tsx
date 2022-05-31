import React from "react";
import Header from "../Services/Header";
// import about from "../../data/about.json";
import data from '../../../data.json'

export default () => {
  return (
    <>
      <div id="about">
        <Header
          title="About"
          description={""}
          backgroundColor="secondaryBg"
        />

        <div className="flex flex-wrap lg:grid lg:grid-cols-2 lg:block justify-center bg-secondaryBg py-5">
          <img
            className="mx-auto"
            src={data.about.image}
            alt="About Me"
          />
          <div className="py-12 space-y-7 mx-5">
            <div className="font-bold text-3xl text-primaryText font-sans">
              Hi There
            </div>
            <div className="text-x1 text-primaryText w-full">
             {data.about.description}
            </div>
            <div>
              <ul className="flex flex-wrap flex-col space-y-6 lg:grid lg:grid-cols-2 lg:block lg:space-y-0">
                {data.about.contact.map((field, i) => {
                  return (
                    <li className="pb-4" key={i}>
                      <div>
                        <div className="text-3x1 text-alternateText font-semibold">
                          {field.title}
                        </div>
                        <div className="text-2x1 text-primaryText">
                          {field.value}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
