'use client'
import { SectionHeader } from '@/components/layaout'
import { DataTable } from '@/components/table'
import useParamApi from '@/hooks/api/useParamApi';
import { Param } from '@/model/param';
import React, { useEffect, useState } from 'react'
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { FcSupport } from 'react-icons/fc';

const columns = [
    { title: 'Parámetro', propName: 'description', maxWidth: '200px' },
    { title: 'Valor', propName: 'value', maxWidth: '200px' },
];



export default function ParamPage() {
    const [params, setParams] = useState<Param[]>([])
    const { fetchParams, updateParams } = useParamApi()

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetchParams()
        setParams(response)
    }

    const onEdit = () => {

    }



    return (
        <>
            <SectionHeader title="Parámetros" iconHeader={FcSupport} />
            <DataTable columns={columns} data={params} onEdit={onEdit} />
        </>
    )
}
