'use client'
import { ProductCard } from '@/components/card';
import { useProductApi } from '@/hooks/api';
import { Product } from '@/model';
import { useEffect, useState } from 'react';

export default function ProductPage() {

    const [products, setProducts] = useState<Product[]>([])
    const { fetchProducts } = useProductApi();

    useEffect(()=> {
        
        const fetchData = async () => {
            const response = await fetchProducts();
            setProducts(response)
        }

        fetchData();
       
    }, [])

    return (
        <div>
            <div className="p-8 bg-color-1 block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
                <div className="w-full mb-1">
                    <div className="grid-cols-4">
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
                </div>
            </div>
        </div>
    )
}
