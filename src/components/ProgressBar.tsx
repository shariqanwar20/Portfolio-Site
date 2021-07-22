import React from "react";

type ProgressBarProps = {
  progressPercentage: number;
  title: string;
};

export default ({ progressPercentage, title }: ProgressBarProps) => {
  return (
    <div className="space-y-2 w-full">
      <div className="flex items-center justify-between" style={{ width: `${progressPercentage}%` }}>
        <span className="text-lg text-primaryText font-semibold font-sans">
          {title}
        </span>

        <span className="text-xs text-right font-semibold inline-block py-1 px-2 uppercase rounded-full text-primaryText bg-alternateText">
          {`${progressPercentage}%`}
        </span>
      </div>
      <div className="h-1 bg-secondaryBg">
        <div
          style={{ width: `${progressPercentage}%` }}
          className={`h-full bg-alternateText`}
        ></div>
      </div>
    </div>
  );
};
