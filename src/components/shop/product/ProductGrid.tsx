import React from 'react';
import ProductItem from './ProductItem';
import filterNames from '@/types/filterEnums';


const ProductGrid = ({ products, click }: { products: any, click: string }) => {

    return (
        <div className={`grid  gap-4 p-4 ${click === filterNames.MobileFilter ? "grid-cols-1" : 'grid-cols-2'} ${(click === filterNames.MobileFilter || click === filterNames.DesktopFilter) ? "md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-3 " : "md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-1 "}`}>
            {products && products.map((product: any) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};






export default ProductGrid;