import React from 'react'
import { IconType } from 'react-icons'


export default function MenuItem({route, title, icon: Icon}: {route: string, title: string, icon: IconType}) {
    return (
        <li>
            <a href={route} className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group">
                <Icon className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500"/>
                <span className="ml-3">{title}</span>
            </a>
        </li>
    )
}
