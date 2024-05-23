import Container from '@/components/Layout/Container'
import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'
import Link from 'next/link'

const NotFound = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <div className="relative z-10 max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16">
                    <h1 className="mb-10 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">Page not found</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                        Oops! Looks like you took a wrong turn. Let's get you back on track.
                    </p>
                    <Link href="/shop" className="inline-flex items-center text-lg font-medium text-primary hover:underline">Get started →</Link>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default NotFound