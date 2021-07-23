import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";

type ContactCardProps = {
  title: string;
  description: string;
  backgroundColor: string;
};

export default ({ title, description, backgroundColor }: ContactCardProps) => {
  return (
    <div
      className={`bg-${backgroundColor} rounded grid grid-cols-4 py-5 w-3/4 md:w-full mx-auto`}
    >
      <div className="col-span-1 mx-auto">
        <LocationMarkerIcon className="block h-10 w-10 text-alternateText" />
      </div>
      <div className="space-y-3 col-span-3 mr-10">
        <h4 className="text-xl text-primaryText font-sans font-bold">
          {title}
        </h4>
        <p className="text-secondaryText text-lg font-semibold">
          {description}
        </p>
      </div>
    </div>
  );
};
