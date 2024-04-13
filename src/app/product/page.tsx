
'use client'
import { ProductCard } from '@/components/card';
import { SectionHeader } from '@/components/layaout';
import NotLogged from '@/components/layaout/notLogged/notLogged';
import AddProductModal from '@/components/modal/product/AddProductModal';
import EditProductModal from '@/components/modal/product/EditProductModal';
import { DataActions } from '@/components/table';
import { ModalId } from '@/constants/modalId';
import { productStatus } from '@/constants/productStatus';
import { useProductApi } from '@/hooks/api';
import { CreateProduct, Product } from '@/model';
import { EditProduct } from '@/model/product';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';
import { PiPaintBrushHouseholdFill } from 'react-icons/pi';


export default function ProductPage() {

    const router = useRouter()
    const [products, setProducts] = useState<Product[]>([])
    const [productSelected, setProductSelected] = useState<Product>({
        id: 0,
        name: '',
        description: '',
        imageUrl: '',
        imageId: '',
        status: productStatus.AVAILABLE,
        price: 0,
        uploadDate: new Date(),
    })
    const [isLogged, setIsLogged] = useState(false)
    const { fetchProducts, editProduct, addProduct } = useProductApi()

    useEffect(()=> {
        const token = localStorage.getItem('token')
        if (token) {
            setIsLogged(true)
            fetchData('');
        }
    }, []) 


    const fetchData = async (nameFilter: string) => {
        const response = await fetchProducts(nameFilter);
        setProducts(response)
    }

    const onAdd = () => {
        router.push(`/product?${ModalId.addProduct}=y`)
    }

    const onSubmitAddProduct = async (data: CreateProduct) => {
        await addProduct(data)
        onRefresh()
    }

    const onSubmitEditProduct = async (data: EditProduct) => {
        await editProduct(productSelected.id, data)
        onRefresh()
    }

    const onRefresh = () => {
        fetchData('')
    }

    const openEdit = (product: Product) => {
        setProductSelected(product)
        router.push(`/product?${ModalId.editProduct}=y`)
    }

    return (
        <>
            <SectionHeader title="Productos" iconHeader={PiPaintBrushHouseholdFill} />
            {isLogged ?
                <>
                    <DataActions modelName='Producto' onAdd={onAdd} onRefresh={onRefresh} onSearch={fetchData} />
            <div className="gallery">
                {
                            products?.map(product => {
                        return (
                            <ProductCard onClick={() => openEdit(product)}
                                key={product.id}
                                name={product.name}
                                description={product.description}
                                imageUrl={product.imageUrl}
                                price={product.price}
                                status={product.status}
                            />
                        )
                    })
                }
            </div>
            <AddProductModal onSubmit={onSubmitAddProduct} />
                    <EditProductModal onSubmit={onSubmitEditProduct} product={productSelected} /> 
                </> : <NotLogged />
            }
        </>
    )
}
