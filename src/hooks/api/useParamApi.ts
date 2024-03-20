import { Sale } from "@/model/sale";
import { useApi } from "./useApi";
import { Param } from "@/model/param";

export default function useParamApi() {
    const { get, post, put, del } = useApi(`${process.env.NEXT_PUBLIC_BACKOFFICE_BACK_URL}/param`)

    const fetchParams = async (): Promise<Param[]> => {
        return await get("")
    }

    const updateParams = async (key: string, value: number): Promise<Param[]> => {
        return await put("", { key, value })
    }

    return { fetchParams, updateParams }
}