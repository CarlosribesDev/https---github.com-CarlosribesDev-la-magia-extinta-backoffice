import { Sale } from "@/model/sale";
import { useApi } from "./useApi";
import { Param } from "@/model/param";
import { CreatePaintingServiceRequest, PaintingService, UpdatePaintingServiceRequest } from "@/model/paintingService";

export default function usePaintingService() {
    const { get, post, put } = useApi(`${process.env.NEXT_PUBLIC_BACKOFFICE_BACK_URL}/paintingservice`)

    const fetchPaintingServices = async (): Promise<PaintingService[]> => {
        return await get("")
    }

    const createPaintingService = async (data: CreatePaintingServiceRequest): Promise<void> => {
        return await post("", data)
    }

    const updatePaintingService = async (id: number, request: UpdatePaintingServiceRequest): Promise<void> => {
        await put(`/${id}`, request)
    }

    return { fetchPaintingServices, createPaintingService, updatePaintingService }
}