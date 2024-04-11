import { Page } from "@/model";
import { useApi } from "./useApi";
import { CreateCustomer, Customer, SimpleCustomer } from "@/model/customer";

export default function useCustomerApi() {
    const { get, post, put } = useApi(`${process.env.NEXT_PUBLIC_BACKOFFICE_BACK_URL}/customer`)

    const fetchCustomers = async (): Promise<Customer[]> => {
        return await get("")
    }

    const fetchSimpleCustomers = async (): Promise<SimpleCustomer[]> => {
        return await get("/simple")
    }

    const addCustomer = async (customer: CreateCustomer): Promise<void> => {
        await post("", customer)
    }

    return { fetchCustomers, fetchSimpleCustomers, addCustomer }
}