import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'
import Container from '@/components/Layout/Container';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Navbar />
            <Container>
                <main>{children}</main>
            </Container>
            <Footer />
        </div>
    )
}