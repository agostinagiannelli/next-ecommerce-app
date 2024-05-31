import { UserProps } from "@/types/UserProps"
import { CredentialProps } from "@/types/CredentialProps"

interface Errors {
    name?: string
    email?: string
    address?: string
    phone?: string
    password?: string
}

export function validateRegister(values: UserProps) {
    const errors: Errors = {}
    if (!values.name) {
        errors.name = "⚠️ Hey, this one’s mandatory!"
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{2,30}$/i.test(values.name)) {
        errors.name = "⚠️ Names should have 2-30 characters using only letters, spaces, and accented letters"
    }
    if (!values.email) {
        errors.email = "⚠️ Hey, this one’s mandatory!"
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email)) {
        errors.email = "⚠️ That doesn’t look like an email. Try again!"
    }
    if (!values.address) {
        errors.address = "⚠️ Hey, this one’s mandatory!"
    } else if (!/^[a-zA-Z0-9 ,\-]{2,50}$/i.test(values.address)) {
        errors.address = "⚠️ Addresses should have 2-50 characters using only letters, numbers, spaces, commas, and hyphens"
    }    
    if (!values.phone) {
        errors.phone = "⚠️ Hey, this one’s mandatory!"
    } else if (!/^\d{7,15}$/i.test(values.phone)) {
        errors.phone = "⚠️ Phone numbers should have 7-15 digits"
    }
    if (!values.password) {
        errors.password = "⚠️ Hey, this one’s mandatory!"
    } else if (!/^(?=.*[!@#$%^&*()_+={}:;<>?|[\]\\'"/.,"~]).{6,20}$/.test(values.password)) {
        errors.password = "⚠️ Passwords should have 6-20 characters, including at least one special character"
    }    
    return errors
}

export function validateLogin(values: CredentialProps) {
    const errors: Errors = {}
    if (!values.email) {
        errors.email = "⚠️ Hey, this one’s mandatory!"
    }
    if (!values.password) {
        errors.password = "⚠️ Hey, this one’s mandatory!"
    }
    return errors
}