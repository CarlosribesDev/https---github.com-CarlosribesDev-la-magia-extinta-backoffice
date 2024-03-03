'use client'
import { LoginForm } from "@/components/security";
import { useEffect, useState } from "react";
import { useProductApi } from "@/hooks/api";
import Link from "next/link";


export default function Home() {

 

    useEffect(() => {
        console.log(process)
        console.log(process.env)
        console.log(process.env.NEXT_PUBLIC_API_URL)
    })


    return (
        <div className="flex justify-center items-center h-screen">  


            <Link className="pe-5" href="/product?showDialog=y">click para modal</Link>
            <Link href="/product">para no modal</Link>
        </div>
    )
}
