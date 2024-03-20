'use client'
import React, { useContext } from 'react'
import MenuItem from './components/menuItem'
import { FaHome } from 'react-icons/fa';
import { IoIosSettings } from "react-icons/io";
import { GiElectric } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { PiPaintBrushHouseholdFill } from "react-icons/pi";
import { FcSupport } from "react-icons/fc";
import { IconType } from 'react-icons';
import { GlobalContext } from '@/context/globalContex';
import { FiUsers } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa6";

interface MenuItemData {
    route: string,
    title: string,
    icon: IconType,
}

const menuItems: MenuItemData[] = [
    {route: '/', title: 'Inicio', icon: FaHome},
    {route: '/customer', title: 'Clientes', icon: FiUsers},
    {route: '/product', title: 'Productos', icon: PiPaintBrushHouseholdFill },
    { route: '/painting_service', title: 'Servicios', icon: FaBriefcase },
    {route: '/sale', title: 'Pagos', icon: FaFileInvoiceDollar},
    { route: '/param', title: 'Configuración', icon: FcSupport },
]

const menuItems2: MenuItemData[] = [

]

export default function SideNavBar() {

    const { isOpen, toggleMenu } = useContext(GlobalContext);

    return (
        <aside id="sidebar" className={`fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 font-normal duration-75 transition-width ${isOpen ? 'block' : 'hidden'} lg:flex`} aria-label="Sidebar">
            <div className="relative flex flex-col flex-1 min-h-0 pt-0  border-r border-gray-200 ">
                <div className="flex flex-col flex-1 pt-5 pb-28 overflow-y-auto scrollbar scrollbar-w-2 scrollbar-thumb-rounded-[0.1667rem] scrollbar-thumb-slate-200 scrollbar-track-gray-400">
                    <div className="flex-1 px-3 space-y-1  divide-y ">
                        <ul className="pt-2 pb-2 space-y-2">
                            {menuItems.map((item: MenuItemData) => (
                                <MenuItem key={item.route} route={item.route} title={item.title} icon={item.icon}/>
                            ))}
                        </ul>                     
                        <ul className="pt-2 space-y-2">
                            {menuItems2.map((item: MenuItemData) => (
                                <MenuItem key={item.route} route={item.route} title={item.title} icon={item.icon}/>
                            ))}
                        </ul>                       
                    </div>
                </div>
            </div>
        </aside>
    )
}
