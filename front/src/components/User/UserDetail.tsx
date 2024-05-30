"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { notifySuccess } from "@/utils/notify"
import { IOrder } from "@/types"
import ButtonLight from "@/components/Button/ButtonLight"
import LinkTextArrow from "@/components/Link/LinkTextArrow"
import LinkTextArrowSm from "@/components/Link/LinkTextArrowSm"

const UserDetail: React.FC<{ orders: IOrder[] | undefined }> = ({ orders }) => {
    const router = useRouter()
    const { token, user, setAuthData } = useAuth();

    const handleLogout = () => {
        setAuthData(null, null);
        notifySuccess('Catch you later! We’re here for your next tech spree.', () => router.push('/store'));
    }

    if (!token || !user) {
        return (
            <div className="flex gap-2">
                <span className="text-lg text-contrast">Oops! Looks like you're not logged in.</span>
                <LinkTextArrow href="/auth/login" className="text-primary">Login</LinkTextArrow>
            </div>
        )
    }

    return (
        <div className={orders && orders.length > 0 ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : ""}>
            <div className="w-full max-w-sm border border-black rounded-lg">
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
                    <LinkTextArrowSm href="/store" className="py-2 text-primary">Go to Shop</LinkTextArrowSm>
                </div>
            </div>
            {orders && orders?.length > 0 && (
                <div className="w-full max-w-sm border border-black rounded-lg">
                    <ul className="p-4">
                        {orders.map((order) => (
                            <li key={order.id} className="grid grid-cols-3 gap-4 p-3">
                                <span className="text-contrast">Order #{order.id}</span>
                                <span>{order.products.join(", ")}</span>
                                <span className="font-bold">Status: ${order.status}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default UserDetail