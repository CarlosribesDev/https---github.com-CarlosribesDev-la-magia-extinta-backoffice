'use client'
import { SectionHeader } from '@/components/layaout'
import NotLogged from '@/components/layaout/notLogged/notLogged';
import AddCostumerModal from '@/components/modal/customer/AddCostumerModal';

import { DataTable, DataActions } from '@/components/table'
import { ModalId } from '@/constants/modalId';
import useCustomerApi from '@/hooks/api/useCustomerApi';
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
    const [isLogged, setIsLogged] = useState(false)
    const { fetchCustomers, addCustomer } = useCustomerApi()

    useEffect(() => { 
        const token = localStorage.getItem('token')
        if (token) {
            setIsLogged(true)
            fetchData('');
        }
    }, [])

    const fetchData = async (searchText: string) => {
        const response = await fetchCustomers(searchText)
        setCustomers(response)
    }

    const onAdd = () => { 
        router.push(`/customer?${ModalId.addCustomer}=y`)
    }

    const onRefresh = () => {
        fetchData('')
    }

    const onSubmitAddCustomer = async (customer: CreateCustomer) => {
        await addCustomer(customer)
        onRefresh()
    }


    return (
        <>
            <SectionHeader title="Clientes" iconHeader={FiUsers} />
            {isLogged ? <>
                <DataActions modelName='Cliente' onAdd={onAdd} onRefresh={onRefresh} onSearch={fetchData} />
                <DataTable columns={columns} data={customers} />
                <AddCostumerModal onSubmit={onSubmitAddCustomer} /> </> : <NotLogged />} 
        </>
    )
}
