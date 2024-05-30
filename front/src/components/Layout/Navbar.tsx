'use client'

import { usePathname } from "next/navigation"
import NavLogo from "@/components/Nav/NavLogo"
import NavCategories from "@/components/Nav/NavCategories"

const Navbar = () => {
    const pathname = usePathname();
    const isLandingPage = pathname === '/';

    if (isLandingPage) {
        return null;
    }

    return (
        <div className="w-full px-4 bg-white border-b border-black xl:px-0">
            <NavLogo />
            <NavCategories />
        </div>
    )
}

export default Navbar