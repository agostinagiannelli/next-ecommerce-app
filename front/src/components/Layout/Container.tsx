const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-center w-full max-w-screen-xl px-4 py-8 mx-auto xl:px-0 mb-14">
            {children}
        </div>
    )
}

export default Container