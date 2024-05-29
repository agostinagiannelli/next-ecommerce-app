import Link from "next/link"

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full bg-white border-t border-black md:flex md:items-center md:justify-between md:py-2 md:px-4">
            <div className="flex flex-col items-center justify-between w-full max-w-screen-xl mx-auto my-2 md:flex-row">
                <p className="mt-1 text-sm text-contrast sm:text-center">Coded with ❤️ by Agostina Giannelli</p>
                <ul className="flex flex-wrap items-center mt-2 text-sm font-medium text-contrast">
                    <li>
                        <Link href="https://www.linkedin.com/in/agostinagiannelli/" className="hover:underline me-4 md:me-6">LinkedIn</Link>
                    </li>
                    <li>
                        <Link href="https://github.com/agostinagiannelli" className="hover:underline">GitHub</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer