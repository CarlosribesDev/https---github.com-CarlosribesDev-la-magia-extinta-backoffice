'use client'
import { SectionHeader } from '@/components/layaout'
import { CreateProjectModal } from '@/components/modal';
import { DataTable, TableActions } from '@/components/table'
import { PopupType, usePopup } from '@/hooks';
import { CreatedProject, Project } from '@/model';
import { ProjectService } from '@/service';
import { useEffect, useState } from 'react';
import { FiUsers } from "react-icons/fi";

const columns = [
    { title: 'Nombre', maxWidth: '70px' },
    { title: 'Apellidos', maxWidth: '300px' },
    { title: 'Email', maxWidth: '300px' },
    { title: 'Localidad', maxWidth: '120px' },
];

export default function ProjectPage() {

    const [projects, setProjects] = useState<Project[]>([]);
    const [project, setProject] = useState<Project | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { showPopup } = usePopup();

    const updateProjects = (): void => {
        ProjectService.getAll().then((res) => setProjects(res));
    };

    useEffect(() => { 
        updateProjects();
    }, [])


    const onAdd = () => { 
        setProject(null);
        setIsModalVisible(true);
    }

    const onEdit = (project: Project) => {
        setProject(project);
        setIsModalVisible(true);
    }

    const onDelete = (project: Project) => {
        showPopup(PopupType.WARNING, 'Borrar proyecto', `Se va a borrar el proyecto seleccionado: ${project.id}. ¿Desea continuar?`, () => {
            ProjectService.deleteById(project.id).then(() => {
                updateProjects();
                showPopup(PopupType.SUCCESS, 'Proyecto borrado', 'El proyecto se ha borrado correctamente');
            });
        });
    }

    const onRefresh = () => {
        updateProjects();
    }

    const onCloseModal = () => {
        setIsModalVisible(false);
    }

    const onSubmitCreate = (project: CreatedProject) => {
        ProjectService.create(project).then(() => {
            updateProjects();
            setIsModalVisible(false);
            showPopup(PopupType.SUCCESS, 'Proyecto creado', 'El proyecto se ha creado correctamente');
        });
    }

    const onSubmitEdit = (project: Project) => {
        ProjectService.update(project).then(() => {
            updateProjects();
            setIsModalVisible(false);
            showPopup(PopupType.SUCCESS, 'Proyecto actualizado', 'El proyecto se ha actualizado correctamente');
        });
    }

    return (
        <div>
            <div className="p-8 bg-color-1 block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
                <div className="w-full mb-1">
                    <SectionHeader title="Clientes" iconHeader={FiUsers}/>
                    <TableActions modelName='Proyecto' onAdd={onAdd} onRefresh={onRefresh}/>
                    <CreateProjectModal isVisible={isModalVisible} onClose={onCloseModal} onSubmitCreate={onSubmitCreate} onSubmitEdit={onSubmitEdit} data={project}/>
                    <DataTable columns={columns} data={projects} onEdit={onEdit} onDelete={onDelete}/>
                </div>
            </div>
        </div>
    )
}
