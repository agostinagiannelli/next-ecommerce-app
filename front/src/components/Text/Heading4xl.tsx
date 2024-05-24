const Heading4xl = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className="mb-10 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            {children}
        </h1>
    )
}

export default Heading4xl