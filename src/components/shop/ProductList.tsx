'use client'

import React, { useState } from 'react'
import FilterRecommend from './FilterRecommend'
import filterNames from '@/types/filterEnums'
import FilterSideBar from './FilterSideBar'
import ProductGrid from './product/ProductGrid'

const ProductList = ({ products }: { products: any }) => {
    // state
    const [click, setClick] = useState<filterNames>(filterNames.None);

    const handleClick = (filterName: Exclude<filterNames, filterNames.None>) => {
        setClick(pervNames => (pervNames === filterName ? filterNames.None : filterName))
    }
    const totalProduct = products.length ?? 0;
    return (
        <>
            <FilterRecommend click={click} handleClick={handleClick} totalProduct={totalProduct} />
            <div className='flex'>
                <FilterSideBar click={click} handleClick={handleClick} />
                <ProductGrid products={products} click={click} />
            </div>
        </>
    )
}

export default ProductList