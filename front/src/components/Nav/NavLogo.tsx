'use client'

import { useState, useEffect } from 'react'
import LinkButtonDark from '../Link/LinkButtonDark'
import LinkButtonLight from '../Link/LinkButtonLight'
import Link from "next/link"

const NavLogo = () => {
    const [token, setToken] = useState(localStorage.getItem('token') ?? null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        setToken(token)
    }, [])

    return (
        <nav className="py-3">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                {token ?
                    <>
                        <Link href="/store">
                            <img src="/logo.svg" className="h-5" alt="Codecraft Logo" />
                        </Link>
                        <div className="flex items-center space-x-2">
                            <LinkButtonLight href="/user/1">
                                Profile
                            </LinkButtonLight>
                            <LinkButtonDark href="">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <span className="sr-only">Cart</span>
                            </LinkButtonDark>
                        </div>
                    </>
                    :
                    <>
                        <img src="/logo.svg" className="h-5" alt="Codecraft Logo" />
                        <div className="flex items-center space-x-2">
                            <LinkButtonLight href="/auth/login">
                                Login
                            </LinkButtonLight>
                        </div>
                    </>
                }
            </div>
        </nav >
    )
}

export default NavLogo