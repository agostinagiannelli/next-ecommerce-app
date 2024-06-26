import Image from "next/image"
import Link from "next/link"
import Heading4xl from "@/components/Text/Heading4xl"
import Subheading from "@/components/Text/Subheading"
import RoundedTextButton from "@/components/Block/RoundedTextButton"
import LinkTextArrow from "@/components/Link/LinkTextArrow"

const Landing = () => {
    return (
        <div className="flex flex-col items-center my-12 text-center">
            <Link href="/store">
                <Image
                    src="/logo.svg"
                    alt="Codecraft Logo"
                    width={160}
                    height={40}
                    className="mt-20 mb-14 w-64 h-auto"
                />
            </Link>
            <RoundedTextButton text="Already with us?" buttonLink="/auth/login" buttonText="Login" />
            <Heading4xl>Your one-stop shop for all things tech.</Heading4xl>
            <Subheading>
                <div>We provide a wide range of products from top brands in the tech industry.</div>
                <div>Ready to shop? Create an account with us.</div>
            </Subheading>
            <LinkTextArrow href="/auth/register" className="text-primary">Get Started</LinkTextArrow>
        </div>
    )
}

export default Landing