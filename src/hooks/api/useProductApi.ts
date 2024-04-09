import { CreateProduct, Page, Product } from "@/model";
import { useApi } from "./useApi";
import { EditProduct } from "@/model/product";

export default function useProductApi() {
    const { get, post, put } = useApi(`${process.env.NEXT_PUBLIC_BACKOFFICE_BACK_URL}/product`)

    const fetchProducts = async (): Promise<Product[]>  => {
        return (await get("") as Page).content
    }

    const addProduct = async (product: CreateProduct): Promise<void> => {
        const data = new FormData();
        data.append('name', product.name)
        data.append('description', product.description)
        data.append('file', product.file)
        data.append('price', product.price.toString())

        await post("", data)
    }

    const editProduct = async (id: number, product: EditProduct): Promise<void> => {
        await put(`/${id}`, product)
    }

    return { fetchProducts, editProduct, addProduct }
}