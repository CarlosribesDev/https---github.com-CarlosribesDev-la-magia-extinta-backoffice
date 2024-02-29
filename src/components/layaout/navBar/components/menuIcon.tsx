import React from 'react'
import Image from 'next/image'

export default function MenuIcon() {
    return (
        <a href="/" className="flex items-center ml-2 md:mr-24">
             <div style={{ borderRadius: '50%', overflow: 'hidden', width: '60px', height: '60px' }}>
                <Image
                    src="/logo.jpg"
                    alt="Logo empresa"
                    width={60}
                    height={60}
                    className="object-cover"
                />
            </div>
            <span className="ms-3 self-center text-2xl font-semibold sm:text-4xl whitespace-nowrap">La magia extinta</span>
        </a>
    )
}
