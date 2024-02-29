import React from 'react'
import Image from 'next/image'

export default function UserIcon() {
    return (
        <div className="flex items-center ml-3">
            <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300" id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2">
                <Image className="w-8 h-8 rounded-full" src="/perfil.png" width={20} height={20} alt="user photo"/>
            </button>   
        </div>
    )
}
