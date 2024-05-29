import LinkTextArrow from "../Link/LinkTextArrow"

interface VideoProps {
    title: string,
    src: string
    href: string
}

const Video: React.FC<VideoProps> = ({ title, src, href }) => {
    return (
        <div className="relative flex items-center justify-center w-full mb-10 overflow-hidden bg-white border border-black rounded-lg max-h-80">
            <video className="object-fill max-h-full" autoPlay loop muted>
                <source src={src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="mb-2 text-3xl font-bold text-white">{title}</div>
                <LinkTextArrow href={href} className="text-white">
                    Shop Now
                </LinkTextArrow>
            </div>
        </div>
    )
}

export default Video