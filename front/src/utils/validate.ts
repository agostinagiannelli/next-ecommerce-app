import { UserProps } from '@/types/UserProps';
import { CredentialsProps } from '@/types/CredentialsProps';

interface Errors {
    name?: string;
    email?: string;
    address?: string;
    phone?: string;
    password?: string;
}

export function validateRegister(values: UserProps) {
    const errors: Errors = {};
    if (!values.name) {
        errors.name = `⚠️ Hey, this one's mandatory!`;
    } else if (!/^[a-zA-Z ]{2,30}$/i.test(values.name)) {
        errors.name = `⚠️ Names should have 2-30 characters using only letters and spaces`;
    }
    if (!values.email) {
        errors.email = `⚠️ Hey, this one's mandatory!`;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email)) {
        errors.email = `⚠️ That doesn't look like an email. Try again!`;
    }
    if (!values.address) {
        errors.address = `⚠️ Hey, this one's mandatory!`;
    } else if (!/^[a-zA-Z0-9 ]{2,50}$/i.test(values.address)) {
        errors.address = `⚠️ Addresses should have 2-50 characters using only letters, numbers and spaces`;
    }
    if (!values.phone) {
        errors.phone = `⚠️ Hey, this one's mandatory!`;
    } else if (!/^\d{7,15}$/i.test(values.phone)) {
        errors.phone = `⚠️ Phone numbers should have 7-15 digits`;
    }
    if (!values.password) {
        errors.password = `⚠️ Hey, this one's mandatory!`;
    } else if (!/^[a-zA-Z0-9]{4,20}$/i.test(values.password)) {
        errors.password = `⚠️ Passwords should have 4-20 characters with only letters and numbers`;
    }
    return errors;
};

export function validateLogin(values: CredentialsProps) {
    const errors: Errors = {};
    if (!values.email) {
        errors.email = `⚠️ Hey, this one's mandatory!`;
    }
    if (!values.password) {
        errors.password = `⚠️ Hey, this one's mandatory!`;
    }
    return errors;
};