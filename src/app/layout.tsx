'use client'
import '../styles/globals.css'
import { NavBar, SideBar, Footer } from '@/components/layaout'
import { useState } from 'react'
import { GlobalContext } from '@/context/globalContex'
import { Popup } from '@/components/modal/pop-up/popUp'
import { PopupProvider } from '@/hooks'


export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/nodejs.png" sizes="any" />
                <title>Admin</title>
            </head>
            <GlobalContext.Provider value={{ isOpen, toggleMenu }}>
                <PopupProvider>
                    <body className='bg-color-1 scrollbar scrollbar-w-3'>
                        <Popup/>
                        <SideBar />
                        <NavBar/>
                        <div className="flex pt-16 overflow-hidden ">
                            <div className="relative w-full h-full overflow-y-auto lg:ml-64 min-h-screen">
                                {children}
                                <Footer/>
                            </div>
                        </div>      
                    </body>
                </PopupProvider>
            </GlobalContext.Provider>
        </html>
    )
}
