const Subheading = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="mb-8 text-lg font-normal text-contrast lg:text-xl sm:px-16 lg:px-48">
            {children}
        </p>
    )
}

export default Subheading