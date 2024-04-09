import { Sale } from "@/model/sale";
import { useApi } from "./useApi";

export default function useSaleApi() {
    const { get, post, put } = useApi(`${process.env.NEXT_PUBLIC_BACKOFFICE_BACK_URL}/sale`)

    const fetchSales = async (): Promise<Sale[]> => {
        return await get("/details")
    }

    return { fetchSales }
}