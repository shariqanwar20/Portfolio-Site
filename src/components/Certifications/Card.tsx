import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default ({ title, imgSrc, description }) => {
    return (
        <div className="relative group max-w-sm bg-secondaryBg rounded p-6 m-4 space-y-6 hover:bg-tertiaryBg">
            <a className="absolute pl-3 py-2 space-y-2 w-full bottom-0 top-auto left-0 right-auto z-10 bg-primaryBg text-left bg-opacity-70 flex flex-col opacity-0 group-hover:opacity-100 duration-300">
                <h1 className="text-alternateText font-semibold text-md">{title}</h1>
                <p className="text-white font-normal text-sm">{description}</p>
            </a>
            <a href="#" className="relative">
                <div className="flex flex-wrap content-center">
                    {/* <StaticImage src={imgSrc} alt={title} className="mx-auto" /> */}
                </div>
            </a>
        </div>
    )
}