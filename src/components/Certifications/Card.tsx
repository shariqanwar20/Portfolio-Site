import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import logo from "../../images/munCertificate.png"

export default ({ title, imgSrc, description }) => {
    return (
        <div className="relative group max-w-sm bg-secondaryBg rounded pb-14 pt-8 pr-5 pl-12 m-4 space-y-6 hover:bg-tertiaryBg">
            <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                <h1 className="tracking-wider">Title</h1>
                <p className="mx-auto">Description</p>
            </a>
            <a href="#" className="relative">
                <div className="flex flex-wrap content-center">
                    <StaticImage src={logo} alt={title} className="mx-auto" />
                </div>
            </a>
        </div>

    )
}