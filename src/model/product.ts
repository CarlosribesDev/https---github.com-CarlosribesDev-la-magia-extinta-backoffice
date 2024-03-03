export type Product = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    imageId: string;
    status: string;
    price: number;
    uploadDate: Date; 
}

export type CreateProduct = {
    name: string,
    description: string,
    file: File,
    price: number
}