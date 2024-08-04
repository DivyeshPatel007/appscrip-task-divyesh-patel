import Banner from '@/components/shop/Banner'
import ProductList from '@/components/shop/ProductList'
import { fetchCategories, fetchProducts } from '@/lib/api';
import { Metadata } from 'next';
import React from 'react'



export const metadata: Metadata = {
    title: 'appscrip | Shop',
    description: 'Refine your search with our intuitive filters. Browse by fit, occasion, work, fabric, segment, suitability, materials, and pattern. Find exactly what you need with our user-friendly, comprehensive filtering options.',
}

const Shop = async () => {
    // const [products, categories] = await Promise.all([fetchProducts(), fetchCategories()]);
    const products = await fetchProducts();
    return (
        <>
            <Banner />

            <ProductList products={products} />
        </>
    )
}






export default Shop