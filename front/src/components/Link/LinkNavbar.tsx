import Link from "next/link"
import { LinkProps } from "./types"

const LinkNavbar: React.FC<LinkProps> = ({ href, children }) => {
    return (
        <Link href={href} className="text-black hover:underline">{children}</Link>
    )
}

export default LinkNavbar