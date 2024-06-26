import Link from "next/link"
import { LinkProps } from "@/types/LinkProps"

const LinkNavbar: React.FC<LinkProps> = ({ href, children }) => {
    return (
        <Link href={href} className="hover:underline">
            {children}
        </Link>
    )
}

export default LinkNavbar