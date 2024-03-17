'use client'
import { SectionHeader } from '@/components/layaout'
import AddCostumerModal from '@/components/modal/customer/AddCostumerModal';

import { DataTable, DataActions } from '@/components/table'
import { ModalId } from '@/constants/modalId';
import useCustomerApi from '@/hooks/api/useCustomerApi';

import { Project } from '@/model';
import { CreateCustomer, Customer } from '@/model/customer';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiUsers } from "react-icons/fi";

const columns = [
    { title: 'Nombre', propName: 'name', maxWidth: '70px' },
    { title: 'Apellidos', propName: 'surname', maxWidth: '140px' },
    { title: 'Email', propName: 'email', maxWidth: '300px' },
    { title: 'Teléfono', propName: 'phone', maxWidth: '120px' },
    { title: 'Dirección', propName: 'address', maxWidth: '300px' },
    { title: 'Población', propName: 'location', maxWidth: '120px' },
];

export default function ProjectPage() {

    const router = useRouter()
    const [customers, setCustomers] = useState<Customer[]>([])
    const { fetchCustomers, addCustomer } = useCustomerApi()




    useEffect(() => { 
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetchCustomers()
        setCustomers(response)
    }


    const onAdd = () => { 
        router.push(`/customer?${ModalId.addCustomer}=y`)
    }

    const onEdit = (project: Project) => {


    }

    const onDelete = (project: Project) => {

    }

    const onRefresh = () => {
        fetchData()
    }

    const onCloseModal = () => {

    }


    const onSubmitAddCustomer = async (customer: CreateCustomer) => {
        console.log(customer);
        await addCustomer(customer)
        fetchData()
    }

    return (
        <>
            <SectionHeader title="Clientes" iconHeader={FiUsers} />
            <DataActions modelName='Cliente' onAdd={onAdd} onRefresh={onRefresh} />
            <DataTable columns={columns} data={customers} onEdit={onEdit} onDelete={onDelete} />
            <AddCostumerModal onSubmit={onSubmitAddCustomer} /> 
        </>

    )
}
