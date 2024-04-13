'use client'
import { useRouter } from "next/navigation";
import Modal from "../Modal";
import { ModalFormProps } from "../types";
import { useEffect, useState } from "react";
import { ModalId } from "@/constants/modalId";
import { SimpleCustomer } from "@/model/customer";
import useCustomerApi from "@/hooks/api/useCustomerApi";


export default function AddPaintingServiceModal({ onSubmit }: ModalFormProps) {
    const router = useRouter()
    const [data, setData] = useState<any>({})
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [customerData, setCustomerData] = useState<SimpleCustomer[]>()
    const [minDate, setMinDate] = useState('');
    const { fetchSimpleCustomers } = useCustomerApi()


    useEffect(() => {
        fetchCustomers()
        const today = new Date();
        const formattedToday = today.toISOString().split('T')[0];
        setMinDate(formattedToday);
    }, [])

    const handleChange = (e: any) => {
        const target = e.target as HTMLInputElement;
        const value = target.value
        const newData: any = {
            ...data,
            [target.name]: value
        }

        setData(newData)

        const requiredFields = ['type', 'description', 'customerId', 'startDate'];
        if (newData.type === 'MURAL') {
            requiredFields.push('m2');
        } else {
            requiredFields.push('canvasSize');
        }


        const isFormValid = requiredFields.every(field => newData[field] !== undefined && newData[field] !== '');
        setSubmitDisabled(!isFormValid);
    }

    const submit = (event: any) => {
        event.preventDefault()
        onSubmit(data)
        onClose()
    }

    const onClose = () => {
        router.push('/painting_service')
        fetchCustomers()
    }


    const reset = () => {
        setData({
            type: 'MURAL',
            customerId: 1,
            canvasSize: 'SMALL'
        })
        setSubmitDisabled(true)
    }

    const fetchCustomers = async () => {
        const fetchData = await fetchSimpleCustomers();
        setCustomerData(fetchData)
    }

    return (
        <Modal title={'Añadir servicio'} id={ModalId.addService} reset={reset}>
            <form >
                <section>
                    <div className="form-input">
                        <label>Tipo</label>
                        <select name="type" onChange={handleChange}>
                            <option value="MURAL">Mural</option>
                            <option value="LIVE_PAINTING">Pintura en vivo</option>

                        </select>
                    </div>
                    <div className="form-input">
                        <label>Descripcion</label>
                        <input onChange={handleChange} name="description" type="text" />
                    </div>
                    <div className="form-input">
                        <label>Cliente</label>
                        <select name="customerId" onChange={handleChange}>
                            {customerData?.map(customer =>
                                <option key={customer.id} value={customer.id}>{customer.data}</option>
                            )}
                        </select>
                    </div>
                    {data?.type === 'MURAL' ?
                        <div className="form-input">
                            <label>M2</label>
                            <input onChange={handleChange} name="m2" type="number" />
                        </div> :
                        <div className="form-input">
                            <label>Tamaño lienzo</label>
                            <select name="canvasSize" onChange={handleChange}>
                                <option value="SMALL">Pequeño</option>
                                <option value="MEDIUM">Mediano</option>
                                <option value="LARGE">Grande</option>
                            </select>
                        </div>
                    }
                    <div className="form-input">
                        <label>Fecha inicio</label>
                        <input type="datetime-local" name="startDate" onChange={handleChange} min={minDate} />
                    </div>
                </section>
                <footer className='flex justify-between mt-6'>
                    <button type="submit" className={submitDisabled ?
                        "disabled-button" : "button-1"} onClick={submit} disabled={submitDisabled}>
                        Aceptar
                    </button>
                    <button type="button" className="button-2" onClick={onClose}>
                        Cancelar
                    </button>
                </footer>
            </form>
        </Modal>
    )
}
