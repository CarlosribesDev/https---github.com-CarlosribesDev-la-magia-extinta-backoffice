'use client'
import { useState } from "react";
import { Field, FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputValidation, loginSchema } from ".";


export default function LoginForm() {

    const [submit, setSubmit] = useState(false)
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = (data: FieldValues) => {
        console.log(data);
        console.log(errors);
        setSubmit(false)
    }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Usuario</label>
                                    <input 
                                        type="text" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5" 
                                        placeholder="Nombre del proyecto"
                                        {...register('username')}
                                     
                                        onChange={() => {}}
                                    />
                                    <InputValidation prop="usernaname" errors={errors} isSubmit={submit}/>
                                    
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Contraseña</label>
                                    <input 
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5" 
                                        placeholder="Descripcion del proyecto"
                                        {...register('password')}
                                      
                                        onChange={() => {}}
                                    />
                                </div>                             
                            </div>
                            <div className='flex justify-between mt-6'>
                                <button type="submit" className="button-1" onClick={() => {}}>
                                    { true ? 'Editar' : 'Crear' }
                                </button>
                                <button type="submit" className="button-2" onClick={() => {}}>
                                    Cancelar
                                </button>
                            </div>
                        </form>
  )
}
