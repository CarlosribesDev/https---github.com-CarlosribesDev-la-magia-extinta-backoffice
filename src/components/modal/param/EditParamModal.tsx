'use client'
import { useRouter } from "next/navigation";
import Modal from "../Modal";
import { useEffect, useState } from "react";
import { ModalId } from "@/constants/modalId";
import { Param } from "@/model/param";

type EditParamModalProps = {
    onSubmit: (data: any) => void,
    param: Param
}


export default function EditParamModal({ onSubmit, param }: EditParamModalProps) {
    const router = useRouter()
    const [data, setData] = useState<any>({})

    useEffect(() => {
        reset()
    }, [param])

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
        router.push('/param')
    }

    const reset = () => {
        setData({
            key: param.key,
            value: param.value,
        })
    }

    return (
        <Modal title={'Modificar Parámetro'} id={ModalId.editParam} reset={reset}>
            <form >
                <section>
                    <div className="form-input">
                        <label>{param?.description}</label>
                        <input onChange={handleChange} value={data.value} name="value" type="number" />
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