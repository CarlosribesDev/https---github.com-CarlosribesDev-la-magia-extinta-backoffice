export type PaintingService = {
    id: number,
    type: string,
    description: string,
    m2: number,
    canvasSize: string,
    customer: string,
    price: number,
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
