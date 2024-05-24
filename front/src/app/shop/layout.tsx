import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'
import Container from '@/components/Layout/Container';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <Container>
                <main>{children}</main>
            </Container>
            <Footer />
        </>
    )
}