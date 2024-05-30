"use client"

import { useAuth } from "@/context/AuthContext"
import { useState, useEffect } from "react"
import { getOrders } from "@/services/apiServices"
import { IOrder } from "@/types"
import Heading4xl from "@/components/Text/Heading4xl"
import UserDetail from "@/components/User/UserDetail"

const User: React.FC = () => {
    const { token, user } = useAuth();
    const [orders, setOrders] = useState<IOrder[] | undefined>(undefined);

    // console.log(user?.id, token)

    const fetchOrders = async () => {
        try {
            if (!token || !user) return
            const ordersData = await getOrders(user.id, token)
            setOrders(ordersData)
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        fetchOrders()
    }, [])

    return (
        <>
            <Heading4xl>Profile</Heading4xl>
            <UserDetail orders={orders} />
        </>
    )
}

export default User