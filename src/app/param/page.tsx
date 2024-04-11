'use client'
import { SectionHeader } from '@/components/layaout'
import NotLogged from '@/components/layaout/notLogged/notLogged';
import EditParamModal from '@/components/modal/param/EditParamModal';
import { DataTable } from '@/components/table'
import { ModalId } from '@/constants/modalId';
import useParamApi from '@/hooks/api/useParamApi';
import { Param } from '@/model/param';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FcSupport } from 'react-icons/fc';

const columns = [
    { title: 'Parámetro', propName: 'description', maxWidth: '200px' },
    { title: 'Valor', propName: 'value', maxWidth: '200px' },
];



export default function ParamPage() {
    const [params, setParams] = useState<Param[]>([])
    const [selectedParam, setSelectedParam] = useState<Param>({
        key: '',
        description: '',
        value: 0,
    })
    const [isLogged, setIsLogged] = useState(false)
    const { fetchParams, updateParams } = useParamApi()
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setIsLogged(true)
            fetchData();
        }
    }, [])

    const fetchData = async () => {
        const response = await fetchParams()
        setParams(response)
    }

    const onEdit = (param: Param) => {
        setSelectedParam(param)
        router.push(`/param?${ModalId.editParam}=y`)
    }

    const onSumitEditParam = async (param: Param) => {
        await updateParams(param.key, param.value)
        fetchData()
    }

    return (
        <>  

            <SectionHeader title="Parámetros" iconHeader={FcSupport} />
            {isLogged ?
                <>
            <DataTable columns={columns} data={params} onEdit={onEdit} />
            <EditParamModal onSubmit={onSumitEditParam} param={selectedParam} />
                </> : <NotLogged />
            }
        </>
    )
}
