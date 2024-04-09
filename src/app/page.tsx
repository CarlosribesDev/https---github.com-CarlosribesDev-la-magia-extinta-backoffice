'use client'
import { useEffect, useState } from "react";
import { SectionHeader } from "@/components/layaout";
import { FaHome } from "react-icons/fa";
import useAdminApi from "@/hooks/api/useAdmin";


export default function Home() {

    const [data, setData] = useState<any>({})
    const { authenticate } = useAdminApi()

    useEffect(() => {
    })

    const handleChange = (e: any) => {
        const target = e.target as HTMLInputElement;
        const value = target.value

        setData({
            ...data,
            [target.name]: value
        })
    }

    const submit = async (event: any) => {
        event.preventDefault()
        const response = await authenticate(data)
        localStorage.setItem('token', response.token)
    }

    return (
        <>
            <SectionHeader title="Inicio" iconHeader={FaHome} />
            <div className="home-form">
                <form >
                    <section>
                        <div className="form-input">
                            <label>Usuario</label>
                            <input onChange={handleChange} value={data.value} name="username" type="text" />
                        </div>
                        <div className="form-input">
                            <label>Password</label>
                            <input onChange={handleChange} value={data.value} name="password" type="text" />
                        </div>
                    </section>
                    <footer className='flex justify-between mt-6'>
                        <button type="submit" className="button-1" onClick={submit}>
                            Aceptar
                        </button>
                        <button type="button" className="button-2" onClick={() => { }}>
                            Cancelar
                        </button>
                    </footer>
                </form >
            </div>
        </>
    )
}
