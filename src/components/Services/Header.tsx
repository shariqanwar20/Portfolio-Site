import React from "react";

type HeaderProps = {
  title: string;
  description: string;
  backgroundColor: string;
};

export default ({ title, description, backgroundColor }: HeaderProps) => {
  return (
    <div className={`bg-${backgroundColor}`}>
      <div className="pt-8">
        <div className="space-y-7 m-auto w-2/3 lg:w-1/2">
          <h4 className="text-4xl text-primaryText font-sans text-center font-bold">
            {title}
          </h4>
          {/* <p className="text-secondaryText text-lg text-center">
            {description}
          </p> */}
        </div>
      </div>

      {/* create a border effect at the end of header */}
      <div className="w-14 h-2 border-b-4 border-alternateText pb-8 m-auto"></div>
    </div>
  );
};
