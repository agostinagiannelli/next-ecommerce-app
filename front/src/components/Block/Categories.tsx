import LinkNavbar from '../Link/LinkNavbar'
import { categories } from '../../utils/categories'

const Categories = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto">
      <ul className="relative z-10 flex flex-row mt-0 mr-6 space-x-8 overflow-x-auto text-sm font-medium">
        {categories.map((category, index) => (
          <li key={index} className="relative">
            <img
              className="w-full h-auto"
              src={category.image}
              alt={category.name}
            />
            <LinkNavbar href={`/store/category/${(index + 1)}`} className="relative z-20">
              {category.name}
            </LinkNavbar>
          </li>
        ))}
      </ul>
      <span className="absolute inset-y-0 right-0 flex items-center sm:hidden">→</span>
    </div>

  )
}

export default Categories