import Link from "next/link"
import { LinkProps } from "@/types/LinkProps"

const LinkButtonLight: React.FC<LinkProps> = ({ children, href }) => {
    return (
        <Link href={href} className="special-block border border-black rounded-full text-base px-5 py-2.5 text-center">
            {children}
        </Link>
    )
}

export default LinkButtonLight