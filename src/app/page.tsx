'use client'
import { LoginForm } from "@/components/security";
import { useEffect, useState } from "react";
import { useProductApi } from "@/hooks/api";


export default function Home() {

 

    useEffect(() => {
        console.log(process)
        console.log(process.env)
        console.log(process.env.NEXT_PUBLIC_API_URL)
    })


    return (
        <div className="flex justify-center items-center h-screen">  
            {/* <h1 className="text-6xl">¡Bienvenido Admin!</h1> */}
            <LoginForm/>
        </div>
    )
}
