'use client'
import { SectionHeader } from '@/components/layaout';
import AddCostumerModal from '@/components/modal/customer/AddCostumerModal';
import { DataActions, DataTable } from '@/components/table';
import { ModalId } from '@/constants/modalId';
import useCustomerApi from '@/hooks/api/useCustomerApi';
import usePaintingService from '@/hooks/api/usePaintingServiceApi';
import { CreateCustomer, Customer } from '@/model/customer';
import { PaintingService } from '@/model/paintingService';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaBriefcase } from 'react-icons/fa';

const columns = [
    { title: 'Descripcion', propName: 'description', maxWidth: '140px' },
    { title: 'M2', propName: 'm2', maxWidth: '300px' },
    { title: 'Tamaño lienzo', propName: 'canvasSize', maxWidth: '120px' },
    { title: 'Cliente', propName: 'customer', maxWidth: '300px' },
    { title: 'Precio', propName: 'price', maxWidth: '120px' },
    { title: 'Fecha inicio', propName: 'startDate', maxWidth: '120px' },
];


export default function PaintingServicePage() {
    const router = useRouter()
    const [paitningServices, setPaintingServices] = useState<PaintingService[]>([])
    const { fetchPaintingServices } = usePaintingService()

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetchPaintingServices()
        setPaintingServices(response)
    }


    const onAdd = () => {
        router.push(`/customer?${ModalId.addCustomer}=y`)
    }

    const onEdit = (data: any) => {
    }

    const onRefresh = () => {
        fetchData()
    }

    const onSubmitAddCustomer = async (customer: CreateCustomer) => {
        console.log(customer);
        // await addCustomer(customer)
        fetchData()
    }

    return (
        <>
            <SectionHeader title="Servicios" iconHeader={FaBriefcase} />
            <DataActions modelName='Servicio' onAdd={onAdd} onRefresh={onRefresh} />
            <DataTable columns={columns} data={paitningServices} onEdit={onEdit} />
            <AddCostumerModal onSubmit={onSubmitAddCustomer} />
        </>
    )
}
