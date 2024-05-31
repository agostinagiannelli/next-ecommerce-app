import Link from "next/link"
import { useAuth } from "@/context/AuthContext"
import { useCart } from "@/context/CartContext"
import LinkButtonDark from "@/components/Link/LinkButtonDark"
import LinkButtonLight from "@/components/Link/LinkButtonLight"

const NavLogo: React.FC = () => {
    const { token } = useAuth()
    const { cartItems } = useCart()

    return (
        <nav className="py-3">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                <Link href="/store">
                    <img src="/logo.svg" className="h-5" alt="Codecraft Logo" />
                </Link>
                {token ?
                    <div className="flex items-center space-x-2">
                        <LinkButtonLight href="/user">Profile</LinkButtonLight>
                        <LinkButtonDark href="/cart" className="relative">
                            <div className="relative">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                {cartItems.length > 0 && (
                                    <div className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-black transform bg-white rounded-full translate-x-2/3 -translate-y-2/3 top-1 right-1">
                                        {cartItems.length}
                                    </div>
                                )}
                            </div>
                        </LinkButtonDark>
                    </div>
                    :
                    <LinkButtonLight href="/auth/login" className="flex items-center space-x-2">Login</LinkButtonLight>
                }
            </div>
        </nav>
    )
}

export default NavLogo