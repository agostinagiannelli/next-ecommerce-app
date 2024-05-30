import LinkButtonDark from "@/components/Link/LinkButtonDark"

interface RoundedTextButtonProps {
    text: string,
    buttonLink: string,
    buttonText: string,
}

const RoundedTextButton: React.FC<RoundedTextButtonProps> = ({ text, buttonLink, buttonText }) => {
    return (
        <div className="inline-flex items-center justify-between px-1 py-1 text-sm bg-gray-200 rounded-full mb-7">
            <span className="text-base px-4 py-1.5">{text}</span>
            <LinkButtonDark href={buttonLink}>{buttonText}</LinkButtonDark>
        </div>
    )
}

export default RoundedTextButton