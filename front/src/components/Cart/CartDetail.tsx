"use client"

import { useAuth } from "@/context/AuthContext"
import { useCart } from "@/context/CartContext"
import { createOrder } from "@/services/apiServices"
import { notifySuccess, notifyFailure } from "@/utils/notify"
import CartProduct from "@/components/Cart/CartProduct"
import ButtonDark from "@/components/Button/ButtonDark"
import LinkTextArrow from "@/components/Link/LinkTextArrow"
import LinkTextArrowSm from "@/components/Link/LinkTextArrowSm"

const CartDetail: React.FC = () => {
    const { token, user } = useAuth();
    const { cartItems, clearCart } = useCart();

    const values = cartItems.map(product => product.id);
    // console.log(user?.id, token, values)

    const handleCheckout = async (values: number[] | undefined) => {
        try {
            if (!token || !user || !values) return
            const data = await createOrder(user.id, token, values);
            if (data) {
                // notifySuccess('Sweet! Your new tech is on its way. Get ready to unbox the awesomeness.');
                // clearCart();
            } else {
                notifyFailure('Yikes, something went wrong. Let’s get this sorted out!');
            }
        } catch (error: any) {
            throw new Error(error);
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, product) => {
            return total + product.price;
        }, 0);
    };

    if (!token || !user) {
        return (
            <div className="flex gap-2">
                <span className="text-lg text-contrast">Oops! Looks like you're not logged in.</span>
                <LinkTextArrow href="/auth/login" className="text-primary">Login</LinkTextArrow>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="flex gap-2">
                <span className="text-lg text-contrast">Your cart is empty.</span>
                <LinkTextArrow href="/store" className="text-primary">Go to Shop</LinkTextArrow>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md border border-black rounded-lg">
            <ul className="p-4">
                {cartItems.map(product => (
                    <CartProduct key={product.id} product={product} />
                ))}
            </ul>
            <div className="px-12 py-4">
                <div className="flex justify-between">
                    <p className="text-xl font-bold">Total</p>
                    <p className="text-3xl font-bold">${calculateTotal()}</p>
                </div>
            </div>
            <div className="p-4 text-center">
                <ButtonDark className="py-2" onClick={() => handleCheckout(values.filter(Boolean) as number[])}>
                    Checkout
                </ButtonDark>
                <LinkTextArrowSm href="/store" className="py-2 text-primary">Continue Shopping</LinkTextArrowSm>
            </div>
        </div>
    )
}

export default CartDetail