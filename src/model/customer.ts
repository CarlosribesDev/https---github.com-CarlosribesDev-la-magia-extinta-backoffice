export type Customer = {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    address: string;
    location: string;
    createdDate: Date
}

export type SimpleCustomer = {
    id: number;
    data: string;
}

export type CreateCustomer = {
    name: string;
    surname: string;
    email: string;
    phone: string;
    address: string;
    location: string;
}