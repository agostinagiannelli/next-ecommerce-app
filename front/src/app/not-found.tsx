import LinkTextArrow from "@/components/Link/LinkTextArrow"
import Heading4xl from "@/components/Text/Heading4xl"
import Subheading from "@/components/Text/Subheading"

const NotFound = () => {
    return (
        <>
            <Heading4xl>Page Not Found</Heading4xl>
            <Subheading>Oops! Looks like you took a wrong turn. Let&apos;s get you back on track.</Subheading>
            <LinkTextArrow href="/store" className="text-primary">Back to Shop</LinkTextArrow>
        </>
    )
}

export default NotFound