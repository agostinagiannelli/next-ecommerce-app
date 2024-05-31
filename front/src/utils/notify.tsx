import { toast } from "react-toastify"

export function notifySuccess(message: string, onClose?: () => void) {
    toast(`✅ ${message}`,
        {
            className: 'font-sans text-black border border-black rounded-lg shadow-none',
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            onClose
        })
}

export function notifyFailure(message: string, onClose?: () => void) {
    toast(`🚫 ${message}`,
        {
            className: 'font-sans text-black border border-black rounded-lg shadow-none',
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            onClose
        })
}