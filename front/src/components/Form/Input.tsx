import { Field, ErrorMessage } from "formik"

interface InputProps {
    placeholder: string,
    type: string,
    name: string,
    label: string
}

const Input: React.FC<InputProps> = ({ placeholder, type, name, label }) => {
    return (
        <div>
            <div className="relative z-0 my-5">
                <Field
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    id={name}
                    className="block py-2.5 px-0 w-full bg-transparent border-b border-black appearance-none focus:outline-none focus:ring-0 focus:border-primary peer placeholder-transparent"
                />
                <label
                    htmlFor={name}
                    className="absolute duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:text-primary">
                    {label}
                </label>
                <ErrorMessage
                    name={name}
                    component="p"
                    className="mt-2 text-xs"
                />
            </div>
        </div>
    )
}

export default Input