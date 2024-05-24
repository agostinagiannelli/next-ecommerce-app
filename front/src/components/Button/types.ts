export interface ButtonProps {
    children: React.ReactNode,
    type?: 'button' | 'submit' | 'reset',
    className?: string,
    disabled?: boolean,
    onClick?: () => void,
}