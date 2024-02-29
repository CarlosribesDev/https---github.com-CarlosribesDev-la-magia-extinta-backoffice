'use client'
import { useContext } from 'react'
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { GlobalContext } from '@/context/globalContex';


export default function HamburguerButton() {
    const { isOpen, toggleMenu } = useContext(GlobalContext);

    return (
        <button onClick={toggleMenu} className="p-2 text-gray-600 rounded lg:hidden hover:text-gray-900 hover:bg-gray-100  focus:bg-gray-100 focus:ring-2 focus:ring-gray-100">
            {isOpen ? (
                <RxCross1 className="w-6 h-6" />
            ) : (
                <RxHamburgerMenu className="w-6 h-6" />
            )}
        </button>
    )
}
