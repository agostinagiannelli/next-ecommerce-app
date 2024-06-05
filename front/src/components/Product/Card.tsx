"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { useCart } from "@/context/CartContext"
import { notifySuccess, notifyFailure } from "@/utils/notify"
import { ProductProps } from "@/types/ProductProps"
import ButtonDark from "@/components/Button/ButtonDark"
import Rating from "@/components/Text/Rating"

const Card: React.FC<{ product: ProductProps | undefined }> = ({ product }) => {
    const router = useRouter()
    const { token } = useAuth()
    const { addToCart, cartItems } = useCart()

    const handleAddToCart = () => {
        if (!product) return

        if (!token) {
            notifyFailure('Let’s fill that cart! Please login to get started.', () => router.push('/auth/login'))
        } else {
            const isInCart = cartItems.find(item => item.id === product.id)
            if (isInCart) {
                notifyFailure(`${product.name} is already in your cart.`)
            } else {
                addToCart(product)
                notifySuccess(`Awesome choice! ${product.name} is now in your cart.`)
            }
        }
    }

    return (
        <div className="w-full border border-black rounded-lg">
            <Link href={`/store/product/${product?.id}`}>
                <div className="flex items-center justify-center p-8 h-72">
                    <Image
                        src={product?.image || "/placeholder-image.jpg"}
                        alt={product?.name || "Product"}
                        width={500}
                        height={500}
                        className="object-contain h-full"
                    />
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
                    <ButtonDark onClick={handleAddToCart}>Add to Cart</ButtonDark>
                </div>
            </div>
        </div>
    )
}

export default Card
