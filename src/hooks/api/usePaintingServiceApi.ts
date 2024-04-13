import { useApi } from "./useApi";
import { CreatePaintingServiceRequest, PaintingService, UpdatePaintingServiceRequest } from "@/model/paintingService";

export default function usePaintingService() {
    const { get, post, put } = useApi(`${process.env.NEXT_PUBLIC_BACKOFFICE_BACK_URL}/paintingservice`)

    const fetchPaintingServices = async (searchDesc: string): Promise<PaintingService[]> => {

        const sizeTranslation: Map<string, string> = new Map([
            ["SMALL", "Pequeño"],
            ["MEDIUM", "Mediano"],
            ["LARGE", "Grande"],
        ]);

        const statusTranslation: Map<string, string> = new Map([
            ["PAID", "PAGADO"],
            ["PENDING", "PENDIENTE"],
            ["IN_PROGRESS", "EN PROGRESO"],
            ["CANCELLED", "CANCELADO"],
        ]);





        const response = await get("", { searchDesc })
        return response?.map((service: PaintingService) => {
            return {
                ...service,
                lienzo: sizeTranslation.get(service.canvasSize) || '',
                estado: statusTranslation.get(service.status),
                formatDate: formatDate(service.startDate.toString())
            }
        })
    }

    const createPaintingService = async (data: CreatePaintingServiceRequest): Promise<void> => {
        return await post("", data)
    }

    const updatePaintingService = async (id: number, request: UpdatePaintingServiceRequest): Promise<void> => {
        await put(`/${id}`, request)
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false // Usar formato de 24 horas
        };

        return new Intl.DateTimeFormat('es-ES', options).format(date).replace(/\//g, '-')
    }

    return { fetchPaintingServices, createPaintingService, updatePaintingService }
}