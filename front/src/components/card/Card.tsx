import Link from 'next/link'
import ButtonDark from '../Button/ButtonDark'
import Rating from '../Text/Rating'
import { ProductProps } from '@/types/ProductProps'

const Card: React.FC<ProductProps> = ({ id, name, shortDescription, price, image, rating }) => {
    return (
        <div>
            <div className="w-full bg-white border border-black rounded-lg">
                <Link href={`/shop/product/${id}`}>
                    <div className="flex items-center justify-center p-8 h-72">
                        <img className="object-contain h-full" src={image} alt={name} />
                    </div>
                </Link>
                <div className="px-5 pb-5">
                    <Link href={`/shop/product/${id}`}>
                        <h5 className="text-xl font-bold tracking-tight">{name}</h5>
                    </Link>
                    <h5 className="mb-3 text-base tracking-tight text-contrast">{shortDescription}</h5>
                    <Rating>{rating}</Rating>
                    <div className="flex items-center justify-between">
                        <p className="text-3xl font-bold ">${price}</p>
                        <ButtonDark>Add to Cart</ButtonDark>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default Card