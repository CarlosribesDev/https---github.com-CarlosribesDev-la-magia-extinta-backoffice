'use client'
import { SectionHeader } from '@/components/layaout'
import { CreateProjectModal } from '@/components/modal';
import { DataTable, DataActions } from '@/components/table'

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

        });
    }

    const onSubmitEdit = (project: Project) => {
        ProjectService.update(project).then(() => {
            updateProjects();
            setIsModalVisible(false);

        });
    }

    return (
        <>
            <SectionHeader title="Clientes" iconHeader={FiUsers} />
            <DataActions modalRoute='customer' modelName='Client' onAdd={onAdd} onRefresh={onRefresh} />
            <CreateProjectModal isVisible={isModalVisible} onClose={onCloseModal} onSubmitCreate={onSubmitCreate} onSubmitEdit={onSubmitEdit} data={project} />
            <DataTable columns={columns} data={projects} onEdit={onEdit} onDelete={onDelete} />
        </>

    )
}
