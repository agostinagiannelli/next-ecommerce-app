"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { ProductProps } from "@/types/ProductProps"

interface CartContextProps {
    cartItems: ProductProps[]
    addToCart: (product: ProductProps) => void
    removeFromCart: (productId: number) => void
    clearCart: () => void
}

const CartContext = createContext<CartContextProps | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<ProductProps[]>([])

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cart') || '[]')
        setCartItems(storedCartItems)
    }, [])

    const addToCart = (product: ProductProps) => {
        const updatedCartItems = [...cartItems, { ...product, quantity: 1 }]
        setCartItems(updatedCartItems)
        localStorage.setItem('cart', JSON.stringify(updatedCartItems))
    }

    const removeFromCart = (productId: number) => {
        const updatedCartItems = cartItems.filter(item => item.id !== productId)
        setCartItems(updatedCartItems)
        localStorage.setItem('cart', JSON.stringify(updatedCartItems))
    }

    const clearCart = () => {
        setCartItems([])
        localStorage.removeItem('cart')
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}