"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { useCart } from "@/context/CartContext"
import { notifySuccess, notifyFailure } from "@/utils/notify"
import { ProductProps } from "@/types/ProductProps"
import Heading3xl from "@/components/Text/Heading3xl"
import ButtonDark from "@/components/Button/ButtonDark"
import Rating from "@/components/Text/Rating"

const ProductDetail: React.FC<{ product: ProductProps | undefined }> = ({ product }) => {
    const router = useRouter()
    const { token } = useAuth()
    const { addToCart, cartItems } = useCart()

    const handleAddToCart = () => {
        if (!product) return

        if (!token) {
            notifyFailure("Let’s fill that cart! Please login to get started.", () => router.push("/auth/login"))
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
        <div className="lg:mt-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div className="flex items-center justify-center p-8 h-96">
                    <Image
                        src={product?.image || "/placeholder-image.jpg"}
                        alt={product?.name || "Product"}
                        width={500}
                        height={500}
                        loading="lazy"
                        className="object-contain w-full h-full"
                    />
                </div>
                <div>
                    <Rating>{product?.rating}</Rating>
                    <Heading3xl>{product?.name}</Heading3xl>
                    <p className="my-5 text-lg text-contrast">{product?.description}</p>
                    <p className="my-5 text-3xl font-bold">${product?.price}</p>
                    <ButtonDark onClick={handleAddToCart}>Add to Cart</ButtonDark>
                    <ul className="mt-8 space-y-2">
                        <li className="flex items-center text-sm font-medium text-gray-600">
                            <svg className="w-5 h-5 mr-2 text-contrast" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Free shipping worldwide
                        </li>
                        <li className="flex items-center text-sm font-medium text-gray-600">
                            <svg className="w-5 h-5 mr-2 text-contrast" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            Secure payment
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail