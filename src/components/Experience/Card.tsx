import React from 'react'
import { IconType } from 'react-icons';
import { IoIosPeople } from 'react-icons/io';

type CardProps = {
    icon: JSX.Element;
    value: number;
    title: string;
}

export default ({ icon, value, title }: CardProps) => {
    return (
        <div className="flex-1 flex-col space-y-3 text-center py-6 px-10">
            {icon}
            <div className="text-alternateText font-sans text-6xl font-bold">
                {value}
            </div>
            <div className="font-sans font-semibold text-3xl text-primaryText">
                {title}
            </div>
        </div>
    )
}
