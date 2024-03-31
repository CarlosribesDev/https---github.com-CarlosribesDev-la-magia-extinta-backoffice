'use client'
import { useRouter } from "next/navigation";
import Modal from "../Modal";
import { useEffect, useState } from "react";
import { ModalId } from "@/constants/modalId";
import { PaintingService } from "@/model/paintingService";
import { paintingServiceStatus } from "@/constants/paintingServiceStatus";


type EditProductModalProps = {
    onSubmit: (data: any) => void,
    service: PaintingService
}


export default function EditPaintingServiceModal({ onSubmit, service }: EditProductModalProps) {
    const router = useRouter()
    const [data, setData] = useState<any>({})
    const [minDate, setMinDate] = useState('');

    useEffect(() => {
        reset()
        const today = new Date();
        const formattedToday = today.toISOString().split('T')[0];
        setMinDate(formattedToday);
    }, [service])

    const handleChange = (e: any) => {
        const target = e.target as HTMLInputElement;
        const value = target.value

        setData({
            ...data,
            [target.name]: value
        })
    }

    const submit = (event: any) => {
        event.preventDefault()
        onSubmit(data)
        onClose()
    }

    const onClose = () => {
        router.push('/painting_service')
    }

    const reset = () => {
        setData({
            description: service.description,
            status: service.status,
            price: service.price,
            startDate: service.startDate,
        })
    }

    return (
        <Modal title={'Editar servicio'} id={ModalId.editService} reset={reset}>
            <form >
                <section>
                    <div className="form-input">
                        <label>Descripcion</label>
                        <input onChange={handleChange} value={data.description} name="description" type="text" />
                    </div>
                    <div className="form-input">
                        <label>Precio</label>
                        <input onChange={handleChange} value={data.price} name="price" type="number" />
                    </div>
                    <div className="form-input">
                        <label>Estado</label>
                        <select name="status" value={data.status} onChange={handleChange}>
                            <option value={paintingServiceStatus.PENDING}>Pendiente</option>
                            <option value={paintingServiceStatus.CANCELLED}>Cancelado</option>
                            <option value={paintingServiceStatus.IN_PROGRESS}>En progreso</option>
                            <option value={paintingServiceStatus.PAID}>Pagado</option>
                        </select>
                    </div>
                    <div className="form-input">
                        <label>Fecha inicio</label>
                        <input type="datetime-local" value={data.startDate?.toString()} name="startDate" onChange={handleChange} min={minDate} />
                    </div>
                </section>
                <footer className='flex justify-between mt-6'>
                    <button type="submit" className="button-1" onClick={submit}>
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