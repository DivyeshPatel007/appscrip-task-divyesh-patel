import Banner from '@/components/shop/Banner'
import ProductList from '@/components/shop/ProductList'
import { fetchCategories, fetchProducts } from '@/lib/api';
import React from 'react'

const Shop = async () => {
    const [products, categories] = await Promise.all([fetchProducts(), fetchCategories()]);
    return (
        <>
            <Banner />

            <ProductList products={products} />
        </>
    )
}






export default Shop