'use client'
import { useRouter } from "next/navigation";
import Modal from "../Modal";
import { ModalFormProps } from "../types";
import { useState } from "react";
import { ModalId } from "@/constants/modalId";


export default function AddProductModal({ onSubmit }: ModalFormProps) {
    const router = useRouter()
    const [data, setData] = useState({})
    const [submitDisabled, setSubmitDisabled] = useState(true);


    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const value = target.type === 'file' ? target.files && target.files[0] : target.value

        const newData: any = {
            ...data,
            [target.name]: value
        }

        setData(newData)

        const requiredFields = ['name', 'price', 'file'];

        const isFormValid = requiredFields.every(field => newData[field] !== undefined && newData[field] !== '');
        setSubmitDisabled(!isFormValid);
    }

    const submit = (event: any) => {
        event.preventDefault()
        onSubmit(data)
        onClose()
    }

    const onClose = () => {
        router.push('/product')
    }

    const reset = () => {
        setData({})
    }

    return (
        <Modal title={'Añadir producto'} id={ModalId.addProduct} reset={reset}>
            <form >
                <section>
                    <div className="form-input">
                        <label>Título</label>
                        <input onChange={handleChange} name="name" type="text" />
                    </div>
                    <div className="form-input">
                        <label>Descripcion</label>
                        <input onChange={handleChange} name="description" type="text" />
                    </div>
                    <div className="form-input">
                        <label>Precio</label>
                        <input onChange={handleChange} name="price" type="number" />
                    </div>
                    <div className="form-input">
                        <label>Imagen</label>
                        <input onChange={handleChange} name="file" accept="image/*" type="file" />
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
