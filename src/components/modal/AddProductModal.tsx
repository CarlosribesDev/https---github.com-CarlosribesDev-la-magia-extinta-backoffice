'use client'
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import { ModalFormProps } from "./types";


export default function AddProductModal({ onSubmit }: ModalFormProps) {

    const router = useRouter()

    const onClose = () => {
        router.push('/product')
    }

    const submit = (event: any) => {
        event.preventDefault()
        onSubmit()
        onClose()
    }

    return (
        <Modal title={'Añadir producto'} onClose={() => { }} onOk={() => { }}>
            <form>
                <label>Título</label>
                <input type="text" />
                <label>descripcion</label>
                <input type="text" />
                <div className='flex justify-between mt-6'>
                    <button type="submit" className="button-1" onClick={submit}>
                        Aceptar
                    </button>
                    <button className="button-2" onClick={onClose}>
                        Cancelar
                    </button>
                </div>
            </form>
        </Modal>

    )
}
