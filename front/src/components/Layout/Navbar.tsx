'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import NavLogo from '../Nav/NavLogo'
import NavCategories from '../Nav/NavCategories'

const Navbar = () => {
    const pathname = usePathname();
    const isLandingPage = pathname === '/';

    if (isLandingPage) {
        return null;
    }

    const [token, setToken] = useState(localStorage.getItem('token') ?? null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        setToken(token)
    }, [])

    return (
        <div className="w-full px-4 bg-white border-b border-black xl:px-0">
            <NavLogo />
            {token ?
                <NavCategories />
                :
                null
            }
        </div>
    )
}

export default Navbar