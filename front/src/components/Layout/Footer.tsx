const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full bg-white border-t border-black md:flex md:items-center md:justify-between md:p-4">
            <div className="flex flex-col items-center justify-between w-full max-w-screen-xl mx-auto my-2 md:flex-row">
                <span className="text-sm text-contrast sm:text-center">Coded with ❤️ by Agostina Giannelli</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-contrast sm:mt-0">
                    <li>
                        <a href="https://www.linkedin.com/in/agostinagiannelli/" className="hover:underline me-4 md:me-6">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/agostinagiannelli" className="hover:underline">GitHub</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer