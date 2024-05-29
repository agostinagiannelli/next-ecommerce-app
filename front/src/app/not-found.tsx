import LinkTextArrow from '@/components/Link/LinkTextArrow'
import Heading4xl from '@/components/Text/Heading4xl'
import Subheading from '@/components/Text/Subheading'

const NotFound = () => {
    return (
        <div className="text-center">
            <Heading4xl>Page Not Found</Heading4xl>
            <Subheading>Oops! Looks like you took a wrong turn. Let's get you back on track.</Subheading>
            <LinkTextArrow href="/shop" className="text-primary">Back to Shop</LinkTextArrow>
        </div>
    )
}

export default NotFound