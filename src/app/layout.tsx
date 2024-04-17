'use client'
import '../styles/globals.css'
import { NavBar, SideBar } from '@/components/layaout'
import { useState } from 'react'
import { GlobalContext } from '@/context/globalContex'


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
                <link rel="icon" href="/logo.jpg" sizes="any" />
                <title>La magia extinta</title>
            </head>

            <body className='bg-color-1 scrollbar scrollbar-w-3'>
                <GlobalContext.Provider value={{ isOpen, toggleMenu }}>
                        <SideBar />
                        <NavBar/>
                        <div className="flex pt-16 overflow-hidden ">
                            <div className="relative w-full h-full overflow-y-auto lg:ml-64 min-h-screen">
                            <div className="p-8 bg-color-1 block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
                                <div className="w-full mb-1">
                                {children}

                            </div>
                            </div>                  
                        </div>
                    </div>
                </GlobalContext.Provider>    
            </body>

        </html>
    )
}
