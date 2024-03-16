import React, { useEffect, useState } from 'react'
import Modal from '../Modal';
import { ModalId } from '@/constants/modalId';
import { useRouter } from 'next/navigation';
import { Product } from '@/model';
import { productStatus } from '@/constants/productStatus';

type EditProductModalProps = {
    onSubmit: (data: any) => void,
    product: Product
}




export default function EditProductModal({ onSubmit, product }: EditProductModalProps) {
    const router = useRouter()
    const [data, setData] = useState<any>()

    useEffect(() => {
        reset()
    }, [product])

    const reset = () => {
        setData({
            name: product.name,
            description: product.description,
            price: product.price,
            status: product.status
        })
    }

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
        router.push('/product')
    }

    return (
        <Modal title={'Editar producto'} id={ModalId.editProduct} reset={reset}>
            <form >
                <section>
                    <div className="form-input">
                        <label>Nombre</label>
                        <input onChange={handleChange} name="name" type="text" value={data?.name} />
                    </div>
                    <div className="form-input">
                        <label>Descripcion</label>
                        <input onChange={handleChange} name="description" type="text" value={data?.description} />
                    </div>
                    <div className="form-input">
                        <label>Precio</label>
                        <input onChange={handleChange} name="price" type="number" value={data?.price} />
                    </div>
                    <div className="form-input">
                        <label>Estado</label>
                        <select name="status" value={data?.status} onChange={handleChange}>
                            <option value={productStatus.AVAILABLE}>Disponible</option>
                            <option value={productStatus.RESERVED}>Reservado</option>
                            <option value={productStatus.RETIRED}>Retirado</option>
                            <option value={productStatus.SOLD}>Vendido</option>
                        </select>
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
