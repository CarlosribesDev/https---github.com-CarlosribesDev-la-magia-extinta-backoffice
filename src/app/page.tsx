'use client'
import { useEffect, useState } from "react";
import { SectionHeader } from "@/components/layaout";
import { FaHome } from "react-icons/fa";
import useAdminApi from "@/hooks/api/useAdmin";


export default function Home() {

    const [data, setData] = useState<any>({})
    const [isLogged, setIsLogged] = useState(false)
    const [loading, setLoading] = useState(true);
    const { authenticate } = useAdminApi()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setIsLogged(true)
        }
        return () => clearTimeout(timer);
    }, [])

    const timer = setTimeout(() => {
        setLoading(false);
    }, 100);

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

        authenticate(data).then(response => {
            localStorage.setItem('token', response.token)
            setIsLogged(true)
            console.log(isLogged)
        });
    }

    const logout = () => {
        setIsLogged(false)
        localStorage.setItem('token', '')
    }

    return (
        <>
            <SectionHeader title="Inicio" iconHeader={FaHome} />
            {loading ? null :
            <div className="home-form">
                {!isLogged ? 
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
                    : <div className='flex flex-col'>
                        <h1 className="text-5xl pb-5">Bienvenido admin</h1>
                        <button className="button-1" onClick={logout}>
                            Cerrar sessión
                        </button>
                    </div>
                }
            </div>
            }
        </>
    )
}
