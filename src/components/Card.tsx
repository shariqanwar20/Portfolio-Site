import React from 'react';

type CardProps = {
    imgSrc: string;
    title: string;
    description: string;
}

export default ({ imgSrc, title, description }: CardProps) => {
    return (
        <div className="max-w-sm bg-secondaryBg rounded pb-14 pt-8 pr-5 pl-12 m-4 space-y-6">
            {/* card logo */}
            <div>
                <img
                    className="block h-12 text-alternateText w-auto"
                    src={imgSrc}
                    alt={title}
                  />
            </div>

            <div className="space-y-3">
            {/* card title and description */}
                <h4 className="text-2xl text-primaryText font-mono">
                    {title}
                </h4>
                <p className="text-secondaryText text-lg">
                    {description}
                </p>
            </div>
        </div>
    );
}