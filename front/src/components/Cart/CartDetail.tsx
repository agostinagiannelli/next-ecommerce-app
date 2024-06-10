"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { useCart } from "@/context/CartContext"
import { createOrder } from "@/services/apiServices"
import { notifySuccess, notifyFailure } from "@/utils/notify"
import CartProduct from "@/components/Cart/CartProduct"
import ButtonDark from "@/components/Button/ButtonDark"
import LinkTextArrow from "@/components/Link/LinkTextArrow"

const CartDetail = () => {
    const router = useRouter()
    const { token } = useAuth()
    const { cartItems, clearCart } = useCart()

    const products = cartItems.map(product => product.id).filter(Boolean) as number[]

    const handleCheckout = async () => {
        try {
            if (!token || products.length === 0) return
            await createOrder(token, products)

            notifySuccess("Sweet! Your new tech is on its way. Get ready to unbox the awesomeness.")
            clearCart()
            router.push("/user")
        } catch (error: any) {
            notifyFailure("Yikes, something went wrong. Let’s get this sorted out!")
            console.error(error)
        }
    }

    const calculateTotal = () => {
        return cartItems.reduce((total, product) => {
            return total + product.price
        }, 0)
    }

    if (!token) {
        return (
            <div className="flex gap-2">
                <span className="text-lg text-contrast">Oops! Looks like you&apos;re not logged in.</span>
                <LinkTextArrow href="/auth/login" className="text-lg text-primary">Login</LinkTextArrow>
            </div>
        )
    }

    if (cartItems.length === 0) {
        return (
            <div className="flex gap-2">
                <span className="text-lg text-contrast">Your cart is empty.</span>
                <LinkTextArrow href="/store" className="text-lg text-primary">Go to Shop</LinkTextArrow>
            </div>
        )
    }

    return (
        <div className="w-full max-w-2xl border border-black rounded-lg">
            <ul className="p-4 space-y-4">
                {cartItems.map(product => (
                    <CartProduct
                        key={product.id}
                        product={product}
                    />
                ))}
            </ul>
            <div className="px-12 lg:px-14 py-4">
                <div className="flex justify-between">
                    <p className="text-xl lg:text-2xl font-bold">Total</p>
                    <p className="text-xl lg:text-2xl font-bold">${calculateTotal()}</p>
                </div>
            </div>
            <div className="p-4 text-center">
                <ButtonDark className="py-2" onClick={handleCheckout}>
                    Checkout
                </ButtonDark>
                <LinkTextArrow href="/store" className="py-2 text-primary">Continue Shopping</LinkTextArrow>
            </div>
        </div>
    )
}

export default CartDetail