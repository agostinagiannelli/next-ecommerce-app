import Heading4xl from '@/components/Text/Heading4xl'
import Subheading from '@/components/Text/Subheading'
import RoundedText from '@/components/Block/RoundedText'
import LinkLogo from '@/components/Link/LinkLogo'
import LinkTextArrow from '@/components/Link/LinkTextArrow'

const Landing = () => {
    return (
        <div className="flex flex-col items-center my-24 text-center">
            <LinkLogo href="/shop" className="h-8 mb-24" />
            <RoundedText text="Already with us?" button="Login" />
            <Heading4xl>Your one-stop shop for all things tech.</Heading4xl>
            <Subheading>
                <div>We provide a wide range of products from top brands in the tech industry.</div>
                <div>Ready to shop? Create an account with us.</div>
            </Subheading>
            <LinkTextArrow href="/shop" className="text-primary">Get Started</LinkTextArrow>
        </div>
    )
}

export default Landing