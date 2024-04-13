import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { ModalFormProps } from '../types';
import Modal from '../Modal';
import { ModalId } from '@/constants/modalId';

export default function AddCostumerModal({ onSubmit }: ModalFormProps) {
    const router = useRouter()
    const [data, setData] = useState<any>({})
    const [submitDisabled, setSubmitDisabled] = useState(true);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const value = target.value

        const newData = {
            ...data,
            [target.name]: value
        };

        setData(newData);

        const requiredFields = ['name', 'surname', 'email'];
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const isFormValid = requiredFields.every(field => {
            if (newData[field] === undefined || newData[field] === '') {
                return false;
            }
            if (field === 'email') {
                return emailRegex.test(newData[field]);
            }
            return true;
        });
        setSubmitDisabled(!isFormValid);
    }

    const submit = (event: any) => {
        event.preventDefault()
        onSubmit(data)
        onClose()
    }

    const onClose = () => {
        router.push('/customer')
    }

    const reset = () => {
        setData({})
    }

    return (
        <Modal title={'Añadir cliente'} id={ModalId.addCustomer} reset={reset}>
            <form >
                <section>
                    <div className="form-input">
                        <label>*Nombre</label>
                        <input onChange={handleChange} name="name" type="text" />
                    </div>
                    <div className="form-input">
                        <label>*Apellidos</label>
                        <input onChange={handleChange} name="surname" type="text" />
                    </div>
                    <div className="form-input">
                        <label>*Email</label>
                        <input onChange={handleChange} name="email" type="email" />
                    </div>
                    <div className="form-input">
                        <label>Teléfono</label>
                        <input onChange={handleChange} name="phone" type="text" />
                    </div>
                    <div className="form-input">
                        <label>Dirección</label>
                        <input onChange={handleChange} name="address" type="text" />
                    </div>
                    <div className="form-input">
                        <label>Población</label>
                        <input onChange={handleChange} name="location" type="text" />
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
