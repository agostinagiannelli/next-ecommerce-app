import { ButtonProps } from '@/types/ButtonProps'

const ButtonLight: React.FC<ButtonProps> = ({ children, type, disabled }) => {
    return (
        <button
            className="special-block border border-black rounded-full text-base px-5 py-2.5 text-center"
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default ButtonLight