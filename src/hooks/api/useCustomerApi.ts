import { Page } from "@/model";
import { useApi } from "./useApi";
import { CreateCustomer, Customer } from "@/model/customer";

export default function useCustomerApi() {
    const { get, post, put, del } = useApi(`${process.env.NEXT_PUBLIC_BACKOFFICE_BACK_URL}/customer`)

    const fetchCustomers = async (): Promise<Customer[]> => {
        return (await get("") as Page).content
    }

    const addCustomer = async (customer: CreateCustomer): Promise<void> => {
        await post("", customer)
    }

    return { fetchCustomers, addCustomer }
}