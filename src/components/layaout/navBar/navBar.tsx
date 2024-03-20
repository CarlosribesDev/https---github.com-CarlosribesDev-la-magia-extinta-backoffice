import React from 'react'
import Logo from './components/menuIcon'
import HamburguerButton from './components/hamburguerButton'

export default function NavBar() {
    return (
        <nav className="fixed z-30 w-full bg-primary border-b border-gray-200">
            <div className="flex items-center justify-between px-3 py-3 lg:px-5 lg:pl-3
            ">
                <section className="flex items-center justify-start">
                    <HamburguerButton/>
                    <Logo/>
                </section>

            </div>
        </nav>
    )
}
