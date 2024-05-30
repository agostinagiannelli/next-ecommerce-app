import { ButtonProps } from "@/types/ButtonProps"

const ButtonLight: React.FC<ButtonProps> = ({ children, type, disabled, onClick, className }) => {
    return (
        <div className={className}>
            <button
                className="special-block border border-black rounded-full text-base px-5 py-2.5 text-center"
                type={type}
                disabled={disabled}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    )
}

export default ButtonLight