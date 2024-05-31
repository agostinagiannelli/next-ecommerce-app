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
        <div className={orders && orders.length > 0 ? "grid grid-cols-1 gap-4 max-w-3xl" : ""}>
            <div className="w-full border border-black rounded-lg">
                <ul className="p-4">
                    <li className="grid grid-cols-3 gap-4 p-3">
                        <span className="text-contrast">Name</span>
                        <span className="mt-1 sm:mt-0 sm:col-span-2">{user?.name}</span>
                    </li>
                    <li className="grid grid-cols-3 gap-4 p-3">
                        <span className="text-contrast">Email</span>
                        <span className="mt-1 sm:mt-0 sm:col-span-2">{user?.email}</span>
                    </li>
                    <li className="grid grid-cols-3 gap-4 p-3">
                        <span className="text-contrast">Address</span>
                        <span className="mt-1 sm:mt-0 sm:col-span-2">{user?.address}</span>
                    </li>
                    <li className="grid grid-cols-3 gap-4 p-3">
                        <span className="text-contrast">Phone</span>
                        <span className="mt-1 sm:mt-0 sm:col-span-2">{user?.phone}</span>
                    </li>
                </ul>
                <div className="p-4 text-center">
                    <ButtonLight className="py-2" onClick={handleLogout}>Logout</ButtonLight>
                    <LinkTextArrow href="/store" className="py-2 text-primary">Go to Shop</LinkTextArrow>
                </div>
            </div>
            {orders && orders?.length > 0 && (
                <div className="w-full border border-black rounded-lg">
                    <ul className="p-4">
                        {orders.map((order) => (
                            <li key={order.id} className="grid grid-cols-4 gap-4 p-3">
                                <span className="text-contrast">Order #{order.id}</span>
                                <span>{order.products.map(product => product.name).join(", ")}</span>
                                <span className="font-bold">Date: {new Date(order.date).toLocaleDateString()}</span>
                                <span className="font-bold">
                                    Status: {order.status === "pending" ? "Pending" : order.status === "approved" ? "Approved" : "Rejected"}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default UserDetail