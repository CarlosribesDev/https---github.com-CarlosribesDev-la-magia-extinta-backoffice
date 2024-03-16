import { ModalId } from "@/constants/modalId"

export type ModalBaseProps = {
    title: string,
    id: ModalId,
    reset: () => void,
    children: React.ReactNode
}

export type ModalFormProps = {
    onSubmit: (data: any) => void,
}


