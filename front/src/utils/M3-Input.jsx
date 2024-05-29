import { Field, ErrorMessage } from 'formik'

export default function Input({ placeholder, type, name, label }) {
    return (
        <div className="mb-3 form-floating">
            <Field
                className="form-control"
                placeholder={placeholder}
                type={type}
                name={name}
                id={name}
            />
            <ErrorMessage
                className="mt-2 errorMessage"
                name={name}
                component="div"
            />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}