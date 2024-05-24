import Link from "next/link"

interface VideoProps {
    title: string,
    src: string
    href: string
}

const Video: React.FC<VideoProps> = ({ title, src, href }) => {
    return (
        <div className="px-4 mx-auto max-w-screen-xl xl:px-0">
            <Link href={href}>
                <div className="relative w-full bg-white border border-black rounded-lg mb-10 max-h-80 overflow-hidden flex items-center justify-center">
                    <video className="max-h-full object-fill" autoPlay loop muted>
                        <source src={src} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-3xl font-bold">{title}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Video