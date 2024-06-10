"use client"

import Image from "next/image"
import { useCart } from "@/context/CartContext"
import { notifySuccess } from "@/utils/notify"
import { ProductProps } from "@/types/ProductProps"

const CartProduct: React.FC<{ product: ProductProps }> = ({ product }) => {
    const { removeFromCart } = useCart()

    const handleRemove = () => {
        if (!product.id) return
        removeFromCart(product.id)
        notifySuccess(`${product.name} removed from cart. Maybe next time?`)
    }

    return (
        <li className="flex items-center gap-2 lg:gap-4">
            <Image
                src={product.image}
                alt={product.name}
                width={66}
                height={66}
                className="object-contain lg:w-28 lg:h-28"
                />
            <div>
                <h3>{product.name}</h3>
            </div>
            <div className="flex items-center justify-end flex-1 gap-2">
                <p className="lg:text-xl font-bold">${product.price}</p>
                <button onClick={handleRemove} className="transition text-contrast hover:text-primary">
                    <span className="sr-only">Remove product</span>
                    <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </li>
    )
}

export default CartProduct