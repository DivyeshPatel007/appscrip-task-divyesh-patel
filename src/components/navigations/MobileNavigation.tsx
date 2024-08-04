
import { menus } from '@/consts'
import Link from 'next/link'
import React from 'react'

const MobileNavigation = ({ handleNavClick, isNavBar }: { handleNavClick: () => void, isNavBar: boolean }) => {
    return (
        <div
            className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${isNavBar ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out z-50 lg:hidden`}
        >
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Menu</h1>
                <ul className="flex flex-col space-y-2">
                    {menus.map((menu, index) => (
                        <li key={`${index}-${menu.name}`}>
                            <Link
                                href={menu.link}
                                className="text-xl"
                                onClick={handleNavClick}
                            >
                                {menu.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MobileNavigation