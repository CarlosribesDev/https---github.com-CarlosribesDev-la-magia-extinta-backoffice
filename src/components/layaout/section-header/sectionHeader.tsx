import React from 'react'
import { IconType } from "react-icons";

export default function SectionHeader({ title, iconHeader: IconHeader }: { title: string, iconHeader: IconType }) {
    return (
        <header className='mb-5'>
            <div className='flex items-center'>
                <IconHeader className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500"/>
                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                    {title}
                </h1>
            </div>
            <hr className='mt-5'/>
            
        </header>
    );
}
