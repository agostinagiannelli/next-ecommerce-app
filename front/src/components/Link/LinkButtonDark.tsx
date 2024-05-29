import Link from "next/link"
import { LinkProps } from "@/types/LinkProps"

const LinkButtonDark: React.FC<LinkProps> = ({ children, href }) => {
    return (
        <Link href={href} className="text-white special-block rounded-full text-base px-5 py-2.5 text-center bg-black hover:bg-primary hover:text-black">
            {children}
        </Link>
    )
}

export default LinkButtonDark