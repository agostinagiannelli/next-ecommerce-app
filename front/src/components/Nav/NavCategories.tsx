import LinkNavbar from '../Link/LinkNavbar'
import { categories } from '../../utils/categories'

const Navbar = () => {
    return (
        <nav className="pb-3">
            <div className="relative max-w-screen-xl mx-auto">
                <ul className="flex flex-row mt-0 mr-6 space-x-8 overflow-x-auto text-sm font-medium">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <LinkNavbar href={`/store/category/${(index + 1)}`}>{category.name}</LinkNavbar>
                        </li>
                    ))}
                </ul>
                <span className="absolute inset-y-0 right-0 flex items-center sm:hidden">→</span>
            </div>
        </nav>
    )
}

export default Navbar