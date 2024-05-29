'use client'

import { usePathname } from 'next/navigation'
import ButtonDark from '../Button/ButtonDark'
import ButtonLight from '../Button/ButtonLight'
import LinkNavbar from '../Link/LinkNavbar'
import LinkLogo from '../Link/LinkLogo'
import { categories } from '../../utils/categories'

const Navbar = () => {
    const pathname = usePathname();
    const isLandingPage = pathname === '/';

    if (isLandingPage) {
        return null;
    }

    return (
        <div className="w-full px-4 bg-white border-b border-black xl:px-0">
            <nav className="pt-3">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                    <LinkLogo href="/shop" className="h-5" />
                    <div className="flex items-center space-x-2">
                        <ButtonLight>Login</ButtonLight>
                        <ButtonDark>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="sr-only">Cart</span>
                        </ButtonDark>
                    </div>
                </div>
            </nav>
            <nav className="py-3">
                <div className="relative max-w-screen-xl mx-auto">
                    <ul className="flex flex-row mt-0 mr-6 space-x-8 overflow-x-auto text-sm font-medium">
                        {categories.map((category, index) => (
                            <li key={index}>
                                <LinkNavbar href={`/shop/category/${(index + 1)}`}>{category.name}</LinkNavbar>
                            </li>
                        ))}
                    </ul>
                    <span className="absolute inset-y-0 right-0 flex items-center sm:hidden">→</span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar