import { paintingServiceStatus } from "@/constants/paintingServiceStatus"

export type PaintingService = {
    id: number,
    type: string,
    description: string,
    m2: number,
    canvasSize: string,
    customer: string,
    price: number,
    status: paintingServiceStatus,
    startDate: Date
}

export type CreatePaintingServiceRequest = {
    type: string,
    description: string,
    m2: number,
    canvasSize: string,
    customerId: number,
    startDate: Date
}

export type UpdatePaintingServiceRequest = {
    description: string,
    price: number,
    status: paintingServiceStatus,
    startDate: Date
}