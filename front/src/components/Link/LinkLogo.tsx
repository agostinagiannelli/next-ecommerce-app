import Link from "next/link"
import { LinkProps } from "./types"

const LinkLogo: React.FC<LinkProps> = ({ href, className }) => {
    return (
        <Link href={href}>
            <img src="/logo.svg" className={className} alt="Codecraft Logo" />
        </Link>
    )
}

export default LinkLogo