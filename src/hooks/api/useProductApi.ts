import { CreateProduct, Page, Product } from "@/model";
import { useApi } from "./useApi";
import { ContentType } from "@/constants/contentType";

export default function useProductApi() {
    const { get, post, put, del } = useApi(`${process.env.NEXT_PUBLIC_BACKOFFICE_BACK_URL}/product`)

    const fetchProducts = async (): Promise<Product[]>  => {
        return (await get("") as Page).content
    }

    const addProduct = async (product: CreateProduct): Promise<void> => {
        console.log(product)
        const data = new FormData();
        data.append('name', product.name)
        data.append('description', product.description)
        data.append('file', product.file)
        data.append('price', product.price.toString())

        await post("", data)
    }

    return { fetchProducts, addProduct }
}