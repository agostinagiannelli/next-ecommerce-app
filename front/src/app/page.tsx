import ButtonDark from '@/components/Button/ButtonDark'
import Link from 'next/link'

const Landing = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-center bg-cover" style={{ backgroundImage: "url('/pattern.webp')" }}>
            <div className="absolute top-36 w-full flex justify-center">
                <Link href="/shop">
                    <img src="/logo.svg" className="h-8" alt="Codecraft Logo" />
                </Link>
            </div>
            <div className="max-w-screen-xl px-4 py-8 text-center">
                <div className="inline-flex items-center justify-between px-1 py-1 text-sm bg-gray-200 rounded-full mb-7">
                    <span className="text-base px-4 py-1.5">Already with us?</span>
                    <ButtonDark>Login</ButtonDark>
                </div>
                <h1 className="mb-10 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">Your one-stop shop for all things tech.</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                    <span className="block">We provide a wide range of products from top brands in the tech industry.</span>
                    <span className="block">Ready to shop? Create an account with us.</span>
                </p>
                <Link href="/shop" className="inline-flex items-center text-lg font-medium text-primary hover:underline">Get started →</Link>
            </div>
        </div>
    )
}

export default Landing