// "use client"

// import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
// import { ProductProps } from '@/types/ProductProps'

// interface CartContextType {
//     cartItems: ProductProps[];
//     addToCart: (product: ProductProps) => void;
//     removeFromCart: (productId: number) => void;
//     clearCart: () => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [cartItems, setCartItems] = useState<ProductProps[]>([]);

//     useEffect(() => {
//         const storedCartItems = JSON.parse(localStorage.getItem('cart') || '[]');
//         setCartItems(storedCartItems);
//     }, []);

//     const addToCart = (product: ProductProps) => {
//         setCartItems(prevItems => {
//             const existingProductIndex = prevItems.findIndex(item => item.id === product.id);
//             let updatedCartItems = [...prevItems];
//             if (existingProductIndex !== -1) {
//                 updatedCartItems[existingProductIndex] = {
//                     ...updatedCartItems[existingProductIndex],
//                     quantity: (updatedCartItems[existingProductIndex].quantity ?? 0) + 1
//                 };
//             } else {
//                 updatedCartItems.push({ ...product, quantity: 1 });
//             }
//             localStorage.setItem('cart', JSON.stringify(updatedCartItems));
//             return updatedCartItems;
//         });
//     };

//     const removeFromCart = (productId: number) => {
//         setCartItems(prevItems => {
//             const updatedCartItems = prevItems.filter(item => item.id !== productId);
//             localStorage.setItem('cart', JSON.stringify(updatedCartItems));
//             return updatedCartItems;
//         });
//     };

//     const clearCart = () => {
//         setCartItems([]);
//         localStorage.removeItem('cart');
//     };

//     return (
//         <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => {
//     const context = useContext(CartContext);
//     if (context === undefined) {
//         throw new Error('useCart must be used within a CartProvider');
//     }
//     return context;
// };