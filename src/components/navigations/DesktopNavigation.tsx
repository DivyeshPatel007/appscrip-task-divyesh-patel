
import { menus } from '@/consts'
import Link from 'next/link'

const DesktopNavigation = () => {
    return (
        <nav className="hidden lg:block border-b border-slate-200">
            <ul className="flex justify-center space-x-8 py-4">
                {menus.map((menu, index) => (
                    <li key={`${index}-${menu.name}`}>
                        <Link href={menu.link} className="text-lg hover:text-gray-600">
                            {menu.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default DesktopNavigation