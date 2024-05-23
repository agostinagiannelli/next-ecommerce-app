import Link from 'next/link'
import ButtonDark from '../Button/ButtonDark'
import { IProduct } from '@/types/IProduct'
import { convertToSlug } from '../../../helpers/slug'

const Card: React.FC<IProduct> = ({ name, shortDescription, price, image, rating }) => {
    return (
        <div>
            <div className="w-full bg-white border border-black rounded-lg">
                <Link href={`/shop/product/${convertToSlug(name)}`}>
                    <div className="flex items-center justify-center p-8 h-72">
                        <img className="object-contain h-full" src={image} alt={name} />
                    </div>
                </Link>
                <div className="px-5 pb-5">
                    <Link href={`/shop/product/${convertToSlug(name)}`}>
                        <h5 className="text-xl font-bold tracking-tight text-black">{name}</h5>
                    </Link>
                    <h5 className="mb-3 text-base tracking-tight text-contrast">{shortDescription}</h5>
                    <div className="flex items-center mb-5">
                        <div className="flex items-center">
                            <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                        <span className="bg-gray-100 text-black text-xs px-2.5 py-0.5 rounded ms-2">{rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                        <ButtonDark>Add to Cart</ButtonDark>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default Card