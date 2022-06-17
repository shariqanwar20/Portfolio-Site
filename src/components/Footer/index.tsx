import React from 'react'

export default () => {
    return (
        <footer className="bg-secondaryBg py-8">
            <div className="text-primaryText text-center font-xl font-sans font-semibold">
                Copyright © {new Date().getFullYear()} All Rights Reserved by
                <span className="text-alternateText font-bold">
                    {` Zohaib Azam`}
                </span>
                <span>
                    .
                </span>
            </div>
        </footer>
    )
}
