import React from "react";
import Header from "../Services/Header";
import about from "../../data/about.json";

export default () => {
  return (
    <>
      <div>
        <Header
          title="About Me"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text."
          backgroundColor="secondaryBg"
        />

        <div className="flex flex-wrap lg:grid lg:grid-cols-2 lg:block justify-center bg-secondaryBg py-5">
          <img
            className="mx-auto"
            src="https://themebing.com/html/amike/assets/images/me-01-alt.png"
            alt="About Me"
          />
          <div className="py-12 space-y-7 mx-10">
            <div className="font-bold text-3xl text-primaryText font-sans">
              Hi There
            </div>
            <div className="text-x1 text-primaryText w-4/5">
              In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at
              sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id
              efficitur sagittis, urna est ultricies eros, ac porta sem turpis
              {"\n"}
              nunc id efficitur sagittis, urna est ultricies eros, ac porta sem
              turpis porta sem turpis quis leo. Nulla in feugiat elit
            </div>
            <div>
              <ul className="flex flex-wrap flex-col space-y-6 lg:grid lg:grid-cols-2 lg:block lg:space-y-0">
                {about.map((field, i) => {
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
