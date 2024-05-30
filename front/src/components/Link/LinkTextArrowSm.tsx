import Link from "next/link"
import { LinkProps } from "@/types/LinkProps"

const LinkTextArrowSm: React.FC<LinkProps> = ({ href, children, className }) => {
    return (
        <div className={className}>
            <Link href={href} className="hover:underline">
                {children} →
            </Link>
        </div>
    )
}

export default LinkTextArrowSm