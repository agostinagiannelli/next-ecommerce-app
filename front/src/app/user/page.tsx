"use client"

import { useAuth } from "@/context/AuthContext"
import { useState, useEffect } from "react"
import { getOrders } from "@/services/apiServices"
import { notifyFailure } from "@/utils/notify"
import { IOrder } from "@/types"
import Heading4xl from "@/components/Text/Heading4xl"
import UserDetail from "@/components/User/UserDetail"

const User = () => {
    const { token, user } = useAuth()
    const [orders, setOrders] = useState<IOrder[]>()

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                if (!token || !user?.id) return
                
                const data = await getOrders(token, user.id)

                if (data) {
                    setOrders(data)
                } else {
                    notifyFailure("Yikes, something went wrong with your orders. Let’s get this sorted out!")
                }
            } catch (error: any) {
                throw new Error(error)
            }
        }

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