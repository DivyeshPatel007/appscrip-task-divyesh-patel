'use client'
import React, { useState } from 'react'
import { PiCaretDownThin, PiCaretUpThin } from 'react-icons/pi'
import { IFooterLink } from '../../../../Projects/product/src/components/Footer';

const FooterFAQs = ({ footerLink }: { footerLink: IFooterLink }) => {
    const [showLinks, setShowLinks] = useState<boolean>(false);

    return (
        <div className='border-b border-gray-200 py-4 text-white  xl:border-none '>
            <div
                className='flex justify-between items-center cursor-pointer px-4 py-2 rounded-md xl:cursor-default'
                onClick={() => setShowLinks(!showLinks)}
            >
                <h4 className='font-bold text-2xl'>{footerLink.title}</h4>
                {showLinks ? (
                    <PiCaretUpThin className="text-white text-xl xl:hidden" />
                ) : (
                    <PiCaretDownThin className="text-white text-xl xl:hidden" />
                )}
            </div>
            <div
                className={`xl:hidden mt-2 overflow-hidden transition-all duration-300 ease-in-out ${showLinks ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className='flex flex-col gap-3 px-4 py-2'>
                    {footerLink.links.map((link, index) => (
                        <li
                            key={`${link.linkName}-${index}`}
                            className='text-white text-lg cursor-pointer'
                        >
                            {link.linkName}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='hidden xl:block'>
                <ul className='flex flex-col gap-3 px-4 py-2'>
                    {footerLink.links.map((link, index) => (
                        <li
                            key={`${link.linkName}-${index}`}
                            className='text-white text-lg cursor-pointer'
                        >
                            {link.linkName}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FooterFAQs