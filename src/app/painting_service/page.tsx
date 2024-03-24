'use client'
import { SectionHeader } from '@/components/layaout';
import AddPaintingModal from '@/components/modal/painting_service/AddPaintingServiceModal';
import EditPaintingServiceModal from '@/components/modal/painting_service/EditPaintingServiceModal';
import { DataActions, DataTable } from '@/components/table';
import { ModalId } from '@/constants/modalId';
import { paintingServiceStatus } from '@/constants/paintingServiceStatus';
import usePaintingService from '@/hooks/api/usePaintingServiceApi';
import { CreatePaintingServiceRequest, PaintingService, UpdatePaintingServiceRequest } from '@/model/paintingService';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaBriefcase } from 'react-icons/fa';

const columns = [
    { title: 'Descripcion', propName: 'description', maxWidth: '140px' },
    { title: 'M2', propName: 'm2', maxWidth: '300px' },
    { title: 'Tamaño lienzo', propName: 'canvasSize', maxWidth: '120px' },
    { title: 'Cliente', propName: 'customer', maxWidth: '300px' },
    { title: 'Precio', propName: 'price', maxWidth: '120px' },
    { title: 'Estado', propName: 'status', maxWidth: '120px' },
    { title: 'Fecha inicio', propName: 'startDate', maxWidth: '120px' },
];


export default function PaintingServicePage() {
    const router = useRouter()
    const [paitningServices, setPaintingServices] = useState<PaintingService[]>([])
    const [selectedService, setSelectedService] = useState<PaintingService>({
        id: 0,
        type: '',
        description: '',
        m2: 0,
        canvasSize: '',
        customer: '',
        price: 0,
        status: paintingServiceStatus.IN_PROGRESS,
        startDate: new Date()
    })
    const { fetchPaintingServices, createPaintingService, updatePaintingService } = usePaintingService()

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetchPaintingServices()
        setPaintingServices(response)
    }

    const onAdd = () => {
        router.push(`/painting_service?${ModalId.addService}=y`)
    }

    const onEdit = (service: PaintingService) => {
        setSelectedService(service)
        router.push(`/painting_service?${ModalId.editService}=y`)
    }

    const onRefresh = () => {
        fetchData()
    }

    const onSubmitAddPaintingService = async (service: CreatePaintingServiceRequest) => {
        await createPaintingService(service);
        fetchData()
    }

    const onSubmitEditPaintingService = async (service: UpdatePaintingServiceRequest) => {
        await updatePaintingService(selectedService.id, service);
        fetchData()
    }

    return (
        <>
            <SectionHeader title="Servicios" iconHeader={FaBriefcase} />
            <DataActions modelName='Servicio' onAdd={onAdd} onRefresh={onRefresh} />
            <DataTable columns={columns} data={paitningServices} onEdit={onEdit} />
            <AddPaintingModal onSubmit={onSubmitAddPaintingService} />
            <EditPaintingServiceModal service={selectedService} onSubmit={onSubmitEditPaintingService} />
        </>
    )
}
