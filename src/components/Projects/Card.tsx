import React from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline";

type CardProps = {
  imgSrc: any;
  title: string;
  description: string;
  link: string;
};

export default ({ imgSrc, title, description, link }: CardProps) => {
  return (
    <div className="group max-w-sm bg-secondaryBg rounded pb-14 pt-8 pr-5 pl-12 m-4 space-y-6 hover:bg-tertiaryBg">
      {/* card logo */}
      <div className="flex flex-wrap justify-between">
        <img
          className="block h-12 text-alternateText w-auto group-hover:animate-wiggle"
          src={imgSrc}
          alt={title}
        />
        <a href={link} target="_blank" className="my-auto">
          <ExternalLinkIcon color="red" className="w-8 h-8" />
        </a>
      </div>

      <div className="space-y-3">
        {/* card title and description */}
        <h4 className="text-2xl text-primaryText font-mono">{title}</h4>
        <p className="text-secondaryText text-lg">{description}</p>
      </div>
    </div>
  );
};
