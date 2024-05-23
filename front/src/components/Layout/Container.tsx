const Container = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="flex flex-col items-center justify-between w-full max-w-screen-xl min-h-screen pt-12 pb-24 mx-auto">
            {children}
        </div>
    )
}

export default Container