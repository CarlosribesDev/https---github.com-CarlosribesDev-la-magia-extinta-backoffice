'use client'

import { CreatedProject, Project } from '@/model';
import React, { useEffect, useState } from 'react'


interface Props {
    isVisible: boolean;
    onClose: () => void;
    onSubmitCreate: (project: CreatedProject) => void;
    onSubmitEdit: (project: Project) => void;
    data: Project | null;
}

export default function CreateProjectModal({isVisible, onClose, onSubmitCreate, onSubmitEdit, data }: Props) {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');

    useEffect(() => {
    
        if(data) {
            setProjectName(data.name);
            setProjectDescription(data.description);
        } else {
            setProjectName('');
            setProjectDescription('');
        }
    },[data])

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProjectName(e.target.value);
    };
    
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProjectDescription(e.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if(!data) {
            const newProject = new CreatedProject(projectName, projectDescription);
            onSubmitCreate(newProject);
            return;
        }

        const project = new Project(data.id, projectName, projectDescription, data.status, data.startDate, data.endDate);
        onSubmitEdit(project);
    };

    return (
        <>
            <div className={`fixed inset-0 z-50 h-100 w-100 bg-black opacity-50 ${isVisible ? 'block' : 'hidden'}`}/>
            <div className={`flex items-center justify-center ${isVisible ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full`}>
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow ">
                        <header className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                            <h3 className="text-lg font-semibold text-gray-900 ">
                                Crear Proyecto
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={onClose}>
                                <b className='text-2xl'>x</b> 
                            </button>
                        </header>
                        <form className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Nombre</label>
                                    <input 
                                        type="text" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5" 
                                        placeholder="Nombre del proyecto"
                                        value={projectName}
                                        onChange={handleNameChange}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Descripcion</label>
                                    <input 
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5" 
                                        placeholder="Descripcion del proyecto"
                                        value={projectDescription}
                                        onChange={handleDescriptionChange}
                                    />
                                </div>                             
                            </div>
                            <div className='flex justify-between mt-6'>
                                <button type="submit" className="button-1" onClick={handleFormSubmit}>
                                    { data ? 'Editar' : 'Crear' }
                                </button>
                                <button type="submit" className="button-2" onClick={onClose}>
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
