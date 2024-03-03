export type ModalBaseProps = {
    title: string,
    onClose: () => void,
    onOk: () => void,
    children: React.ReactNode
}

export type ModalFormProps = {
    onSubmit: () => void,
}


