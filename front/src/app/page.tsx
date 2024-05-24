import Heading4xl from '@/components/Text/Heading4xl'
import Subheading from '@/components/Text/Subheading'
import RoundedText from '@/components/Block/RoundedText'
import LinkLogo from '@/components/Link/LinkLogo'
import LinkTextArrow from '@/components/Link/LinkTextArrow'

const Landing = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-center bg-cover" style={{ backgroundImage: "url('/pattern.webp')" }}>
            <div className="absolute top-36 w-full flex justify-center">
                <LinkLogo href="/shop" className="h-8" />
            </div>
            <div className="max-w-screen-xl px-4 py-8 text-center">
                <RoundedText text="Already with us?" button="Login" />
                <Heading4xl>Your one-stop shop for all things tech.</Heading4xl>
                <Subheading>We provide a wide range of products from top brands in the tech industry. Ready to shop? Create an account with us.</Subheading>
                <LinkTextArrow href="/shop">Get started</LinkTextArrow>
            </div>
        </div>
    )
}

export default Landing