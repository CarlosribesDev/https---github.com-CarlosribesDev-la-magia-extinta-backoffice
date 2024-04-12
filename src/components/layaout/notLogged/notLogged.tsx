'use client'
import { useEffect, useState } from "react";


export default function NotLogged() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? (
                null
            ) : (
                <h1 className="text-3xl">Inicio de sesión obligatorio</h1>
            )}
        </div>
    );
}
