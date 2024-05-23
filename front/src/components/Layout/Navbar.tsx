import Link from 'next/link'
import ButtonDark from '../Button/ButtonDark'
import ButtonLight from '../Button/ButtonLight'
import { categories } from '../../../helpers/categories'
import { convertToSlug } from '../../../helpers/slug'

const Navbar = () => {
    return (
        <div className="w-full bg-white border-b border-black">
            <nav className="px-4 pt-4">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                    <Link href="/shop">
                        <img src="/logo.svg" className="h-6" alt="Codecraft Logo" />
                    </Link>
                    <div className="flex items-center space-x-2">
                        <ButtonLight>Login</ButtonLight>
                        <ButtonDark>
                            <svg className="w-6 h-6 p-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                            </svg>
                            <span className="sr-only">Shopping Cart</span>
                        </ButtonDark>
                    </div>
                </div>
            </nav>
            <nav className="px-4 py-2">
                <div className="max-w-screen-xl py-3 mx-auto relative">
                    <ul className="flex flex-row mt-0 space-x-8 text-sm font-medium overflow-x-auto mr-6">
                        {categories.map((category, index) => (
                            <li key={index}>
                                <Link href={`/shop/category/${convertToSlug(category.name)}`} className="text-black hover:underline" aria-current="page">{category.name}</Link>
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