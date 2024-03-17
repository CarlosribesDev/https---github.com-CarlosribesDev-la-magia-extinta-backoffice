import { productStatus } from "@/constants/productStatus";

export type Product = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    imageId: string;
    status: productStatus;
    price: number;
    uploadDate: Date; 
}

export type EditProduct = {
    name: string;
    description: string;
    status: productStatus;
    price: number;
    customerId: number;
}

export type CreateProduct = {
    name: string,
    description: string,
    file: File,
    price: number
}