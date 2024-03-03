
'use client'
import { ProductCard } from '@/components/card';
import { SectionHeader } from '@/components/layaout';
import AddProductModal from '@/components/modal/AddProductModal';
import { DataActions } from '@/components/table';
import { useProductApi } from '@/hooks/api';
import { CreateProduct, Product } from '@/model';

import { useEffect, useState } from 'react';
import { PiPaintBrushHouseholdFill } from 'react-icons/pi';


export default function ProductPage() {

    const [products, setProducts] = useState<Product[]>([])
    const { fetchProducts, addProduct } = useProductApi();


    useEffect(()=> {
        
        const fetchData = async () => {
            const response = await fetchProducts();
            setProducts(response)
        }

        fetchData();

    }, [])


    const onAdd = () => {
        console.log("añadir")
    }

    const onSubmitAddProduct = (data: CreateProduct) => {
        console.log("aceptado")
        console.log(data)
        addProduct(data)

    }

    const onClose = () => {
        console.log("close")

    }

    const onRefresh = () => {
        console.log("refrescar")
    }

    return (
        <>
            <SectionHeader title="Productos" iconHeader={PiPaintBrushHouseholdFill} />
            <DataActions modelName='Producto' modalRoute='product' onAdd={onAdd} onRefresh={onRefresh} />
            <div className="gallery">
                {
                    products.map(product => {
                        return (
                            <ProductCard
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
        </>
    )
}
