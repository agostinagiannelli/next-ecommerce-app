import { ButtonProps } from './types'

const ButtonLight: React.FC<ButtonProps> = ({ children }) => {
    return (
        <button type="button" className="text-black special-block border border-black rounded-full text-base px-5 py-2.5 text-center">
            {children}
        </button>
    )
}

export default ButtonLight