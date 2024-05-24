import Link from "next/link"
import { LinkProps } from "./types"

const LinkTextArrow: React.FC<LinkProps> = ({ href, children }) => {
    return (
        <Link href={href} className="inline-flex items-center text-lg font-medium text-primary hover:underline">
            {children} →
        </Link>
    )
}

export default LinkTextArrow