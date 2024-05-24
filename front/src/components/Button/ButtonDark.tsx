import { ButtonProps } from './types'

const ButtonDark: React.FC<ButtonProps> = ({ children }) => {
    return (
        <button className="text-white special-block rounded-full text-base px-5 py-2.5 text-center bg-black hover:bg-primary hover:text-black">
            {children}
        </button>
    )
}

export default ButtonDark