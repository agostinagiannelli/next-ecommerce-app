"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/context/AuthContext"
import { getOrders } from "@/services/apiServices"
import { IOrder } from "@/types"
import Heading4xl from "@/components/Text/Heading4xl"
import UserDetail from "@/components/User/UserDetail"

const User = () => {
    const { token } = useAuth()
    const [orders, setOrders] = useState<IOrder[]>()

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                if (!token) return
                const data = await getOrders(token)

                setOrders(data)
            } catch (error: any) {
                console.error(error)
            }
        }

        fetchOrders()
    }, [token])

    useEffect(() => {
        document.title = "Profile · Codecraft"
        document.querySelector('meta[name="description"]')?.setAttribute("content", "Your one-stop shop for all things tech.")
    }, [])

    return (
        <>
            <Heading4xl>Profile</Heading4xl>
            <UserDetail orders={orders} />
        </>
    )
}

export default User