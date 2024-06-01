import { useAuth } from "@/context/AuthContext"
import { useCart } from "@/context/CartContext"
import { notifySuccess } from "@/utils/notify"
import { IOrder } from "@/types"
import ButtonLight from "@/components/Button/ButtonLight"
import LinkTextArrow from "@/components/Link/LinkTextArrow"

const UserDetail: React.FC<{ orders: IOrder[] | undefined }> = ({ orders }) => {
    const { user, setAuthData } = useAuth()
    const { clearCart } = useCart()

    const handleLogout = () => {
        setAuthData(null, null)
        clearCart()
        notifySuccess('Catch you later! We’re here for your next tech spree.')
    }

    if (!user) {
        return (
            <div className="flex gap-2">
                <span className="text-lg text-contrast">Oops! Looks like you're not logged in.</span>
                <LinkTextArrow href="/auth/login" className="text-lg text-primary">Login</LinkTextArrow>
            </div>
        )
    }

    return (
        <>
            <div className={orders && orders.length > 0 ? "grid md:grid-cols-4 gap-4" : ""}>
                <div className="col-span-1 w-full">
                    <ul>
                        <li className="p-4">
                            <span className="block text-contrast">Name</span>
                            <span className="block mt-1">{user?.name}</span>
                        </li>
                        <li className="p-4">
                            <span className="block text-contrast">Email</span>
                            <span className="block mt-1">{user?.email}</span>
                        </li>
                        <li className="p-4">
                            <span className="block text-contrast">Address</span>
                            <span className="block mt-1">{user?.address}</span>
                        </li>
                        <li className="p-4">
                            <span className="block text-contrast">Phone</span>
                            <span className="block mt-1">{user?.phone}</span>
                        </li>
                    </ul>
                </div>
                {orders && orders.length > 0 && (
                    <div className="col-span-3 w-full max-w-2xl">
                        <ul className="p-4 space-y-4">
                            {orders.map((order) => (
                                <li key={order.id} className="p-4 border border-black rounded-lg lg:grid lg:grid-cols-3 gap-4">
                                    <div>
                                        <span className="block">
                                            <span className="text-contrast">Order: </span>
                                            {order.id}
                                        </span>
                                        <span className="block">
                                            <span className="text-contrast">Date: </span>
                                            {new Date(order.date).toLocaleDateString()}
                                        </span>
                                        <span className="block">
                                            <span className="text-contrast">Status: </span>
                                            {order.status === "pending" ? "🤞 Pending" : order.status === "approved" ? "👍 Approved" : "👎 Rejected"}
                                        </span>
                                    </div>
                                    <div className="lg:col-span-2">
                                        <span className="block lg:inline lg:col-span-3">{order.products.map(product => product.name).join(", ")}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="p-4 text-center">
                <ButtonLight className="py-2" onClick={handleLogout}>Logout</ButtonLight>
                <LinkTextArrow href="/store" className="py-2 text-primary">Go to Shop</LinkTextArrow>
            </div>
        </>
    )
}

export default UserDetail