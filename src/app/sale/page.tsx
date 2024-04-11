'use client'
import { SectionHeader } from "@/components/layaout"
import NotLogged from "@/components/layaout/notLogged/notLogged";
import { DataTable } from "@/components/table"
import useSaleApi from "@/hooks/api/useSaleApi";
import { Sale } from "@/model/sale";
import { useEffect, useState } from "react";
import { FaFileInvoiceDollar } from "react-icons/fa";

const columns = [
    { title: 'Cliente', propName: 'customer', maxWidth: '300px' },
    { title: 'Producto', propName: 'product', maxWidth: '140px' },
    { title: 'Servicio', propName: 'service', maxWidth: '300px' },
    { title: 'Fecha', propName: 'saleDate', maxWidth: '120px' },
    { title: 'Cantidad €', propName: 'amount', maxWidth: '300px' },
];

export default function SalesPage() {
    const [sales, setSales] = useState<Sale[]>([])
    const { fetchSales } = useSaleApi()
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setIsLogged(true)
            fetchData();
        }
    }, [])

    const fetchData = async () => {
        const response = await fetchSales()
        setSales(response)
    }

    return (
        <>
            <SectionHeader title="Ventas" iconHeader={FaFileInvoiceDollar} />
            {isLogged ?
                <DataTable columns={columns} data={sales} /> : <NotLogged />
            }
        </>
    )
}