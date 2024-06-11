"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { UserProps } from "@/types/UserProps"

interface AuthContextProps {
    token: string | null
    user: UserProps | null
    setAuthData: (token: string | null, user: UserProps | null) => void
}

const AuthContext = createContext<AuthContextProps>({
    token: null,
    user: null,
    setAuthData: () => { },
})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null)
    const [user, setUser] = useState<UserProps | null>(null)

    useEffect(() => {
        const storedToken = localStorage.getItem("token")
        if (storedToken) {
            setToken(storedToken)
        }
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, [])

    useEffect(() => {
        if (token && user) {
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
        } else {
            localStorage.removeItem("token")
            localStorage.removeItem("user")
        }
    }, [token, user])

    const setAuthData = (newToken: string | null, newUser: UserProps | null) => {
        setToken(newToken)
        setUser(newUser)
    }

    return (
        <AuthContext.Provider value={{ token, user, setAuthData }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within a AuthContext')
    }
    return context
}