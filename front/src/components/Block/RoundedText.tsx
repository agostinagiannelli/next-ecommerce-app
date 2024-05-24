import ButtonDark from "../Button/ButtonDark"

interface RoundedTextProps {
    text: string,
    button: string
}

const RoundedText: React.FC<RoundedTextProps> = ({ text, button }) => {
    return (
        <div className="inline-flex items-center justify-between px-1 py-1 text-sm bg-gray-200 rounded-full mb-7">
            <span className="text-base px-4 py-1.5">{text}</span>
            <ButtonDark>{button}</ButtonDark>
        </div>
    )
}

export default RoundedText