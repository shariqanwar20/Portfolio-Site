import { LocationMarkerIcon, MailIcon, PhoneIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

type ContactCardProps = {
  title: string;
  description: string;
  backgroundColor: string;
  icon: string
};


export default ({ title, description, backgroundColor, icon }: ContactCardProps) => {

  const getSvgIcon = () => {
    switch (icon) {
      case "location":
        return(<LocationMarkerIcon className="block h-10 w-10 text-alternateText"/>)
      case "phone":
        return(<PhoneIcon className="block h-10 w-10 text-alternateText" />)
      case "mail": 
        return(<MailIcon className="block h-10 w-10 text-alternateText"/>)
      default:
        break;
    }
  }


  return (
    <div
      className={`bg-${backgroundColor} rounded grid grid-cols-4 py-5 mx-auto md:mx-0`}
    >
      <div className="col-span-1 mx-auto">
        {getSvgIcon()}
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
