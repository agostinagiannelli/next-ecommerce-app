import Link from 'next/link'
import ButtonDark from '../Button/ButtonDark'
import Rating from '../Text/Rating'
import { ProductProps } from '@/types/ProductProps'

const Card: React.FC<{ product: ProductProps | undefined }> = ({ product }) => {
    return (
        <div>
            <div className="w-full border border-black rounded-lg">
                <Link href={`/store/product/${product?.id}`}>
                    <div className="flex items-center justify-center p-8 h-72">
                        <img className="object-contain h-full" src={product?.image} alt={product?.name} />
                    </div>
                </Link>
                <div className="px-5 pb-5">
                    <Link href={`/store/product/${product?.id}`}>
                        <h5 className="text-xl font-bold tracking-tight">{product?.name}</h5>
                    </Link>
                    <h5 className="mb-3 text-base tracking-tight text-contrast">{product?.shortDescription}</h5>
                    <Rating>{product?.rating}</Rating>
                    <div className="flex items-center justify-between">
                        <p className="text-3xl font-bold ">${product?.price}</p>
                        <ButtonDark>Add to Cart</ButtonDark>
                    </div>
                </div >
            </div>
        </div>
    )
}

export default Card