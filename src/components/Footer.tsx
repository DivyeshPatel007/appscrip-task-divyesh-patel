import StarIcon from '@/assets/StarIcon'
import USAFlagIcon from '@/assets/UsaFlagIcon'
import React from 'react'
import FooterFAQs from './FooterFAQs'
import { footerLinks } from '@/consts'


interface Links {
    linkName: string,
    path: string
}
export interface IFooterLink {
    title: string,
    links: Links[],
}




const Footer = () => {
    return (
        <div className='bg-black text-white w-full px-3 py-6 '>
            <div className='  xl:space-x-6 xl:flex xl:border-b xl:border-white  justify-between xl:py-6'>
                <div className=' xl:space-y-8'>
                    <h5 className='uppercase text-2xl font-extrabold'>be the first to know</h5>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <form className='flex  gap-4 ' >
                        <input type="email" placeholder='Enter your e-mail...' className='placeholder:text-gray-400 placeholder:mr-3 px-8 py-4 text-xl xl:w-[550px]' />
                        <button className=' rounded-md border-2 border-stone-500  text-stone-500 uppercase text-xl  p-4 xl:px-20 xl:text-2xl '>subcribe</button>
                    </form>
                </div>
                {/* TODO:Item should be in start  */}
                <div className=''>
                    <div className='border-y-2 border-white mt-6 py-6 space-y-4 xl:border-none xl:mt-0 xl:py-0'>
                        <h5 className='uppercase text-2xl font-extrabold'>Call us</h5>
                        <div className='flex  items-center gap-3 xl:block xl:space-y-6'>
                            <p className='text-xl'>+44 221 133 5360</p>
                            <StarIcon size={10} className="xl:hidden" />
                            <p className='text-xl'>customercare@mettamuse.com</p>
                        </div>
                    </div>
                    <div className='border-b-4 border-white space-y-4 py-6 xl:border-none'>
                        <h5 className='uppercase text-2xl font-extrabold' >Currency</h5>
                        <div className='flex items-center gap-3'>
                            <USAFlagIcon size={30} />
                            <StarIcon size={10} />
                            <span>USD</span>
                        </div>
                        <p className='text-gray-400'>Transaction will be completed in Euros and a currency reference is availabel now.</p>
                    </div>
                </div>
            </div>




            {/* LINKS */}
            <div className='grid xl:grid-cols-3'>
                {footerLinks && footerLinks.map((footerLink, index) => (
                    <FooterFAQs footerLink={footerLink} key={`${index}-${footerLink.title}`} />
                ))}
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">mettā muse ACCEPTS</h3>
                <div className="flex space-x-2">
                    <div className="w-10 h-6 bg-white rounded"></div>
                    <div className="w-10 h-6 bg-white rounded"></div>
                    <div className="w-10 h-6 bg-white rounded"></div>
                    <div className="w-10 h-6 bg-white rounded"></div>
                    <div className="w-10 h-6 bg-white rounded"></div>
                </div>
            </div>
            <span className=' block mt-4 text-center text-white'>Copyright © 2023 mettamuse. All rights reserved.</span>
        </div>
    )
}

export default Footer