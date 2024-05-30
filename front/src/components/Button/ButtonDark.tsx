import { ButtonProps } from "@/types/ButtonProps"

const ButtonDark: React.FC<ButtonProps> = ({ children, type, disabled, onClick, className }) => {
    return (
        <div className={className}>
            <button
                className="text-white special-block rounded-full text-base px-5 py-2.5 text-center bg-black hover:bg-primary hover:text-black"
                type={type}
                disabled={disabled}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    )
}

export default ButtonDark