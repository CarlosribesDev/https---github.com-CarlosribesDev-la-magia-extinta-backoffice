import { Page, Product } from "@/model";
import { useApi } from "./useApi";

export default function useProductApi() {
    const { get, post, put, del } = useApi(`${process.env.NEXT_PUBLIC_BACKOFFICE_BACK_URL}/product`)

    const fetchProducts = async (): Promise<Product[]>  => {
        return (await get("") as Page).content
    }

    return { fetchProducts }
}