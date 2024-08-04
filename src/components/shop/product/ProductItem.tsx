'use client'

import HeartIcon from '@/assets/HeartIcon';
import Skeleton from '@/components/ui/Skeleton';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CiHeart } from 'react-icons/ci';


interface IProduct {
    productName: string;
    imageURL: string;
    price: string;

}

const ProductItem = ({ product }: { product: any }) => {
    const [isLike, setIsLike] = useState<boolean>(false);
    const [imageLoading, setImageLoading] = useState<boolean>(true);




    const handleLike = () => {
        setIsLike(!isLike);
    }



    const truncateTitle = (title: string, maxLength: number) => {
        if (title.length <= maxLength) return title;

        const truncated = title.substring(0, maxLength).trim();
        return truncated.substring(0, truncated.lastIndexOf(' ')) + '......';
    }


    return (
        <div className='w-full py-2' >
            {/* Image */}
            <div className='aspect-square relative'>
                {imageLoading && <Skeleton className="w-full h-full absolute inset-0" />}

                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "contain" }}
                    onLoad={() => setImageLoading(false)}
                />

            </div>
            {/* Content */}
            <div className='flex gap-2' >
                <div>
                    <h3 className='font-bold uppercase text-xl'>{truncateTitle(product.title, 30)}</h3>
                    <p className='text-gray-500'>
                        <Link className='underline' href={'/sign-in'}>Sign In</Link> or Create an account to see pricing
                    </p>
                </div>
                <div className='cursor-pointer self-center' onClick={handleLike}>
                    {isLike ? <HeartIcon size={32.5} /> : <CiHeart className='text-4xl cursor-pointer' />}
                </div>
            </div>
        </div>
    )
}

export default ProductItem








