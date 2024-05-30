import { ProductProps } from '@/types/ProductProps'
import { UserProps } from '@/types/UserProps'
import { CredentialsProps } from '@/types/CredentialsProps'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export async function getProducts() {
    try {
        const response = await fetch(`${API_URL}/products`, {
            method: 'GET',
            next: { revalidate: 3600 }
        })
        const products: ProductProps[] = await response.json()
        return products
    } catch (error: any) {
        console.error(error.message);
    }
};

export async function getProductById(id: string) {
    try {
        const products = await getProducts()
        const product = products?.find((product) => product.id?.toString() === id)
        if (!product) throw new Error('Product not found')
        return product
    } catch (error: any) {
        console.error(error.message);
    }
};

export async function loginUser(credentials: CredentialsProps) {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json()
        return data
    } catch (error: any) {
        console.error(error.message);
    }
}

export async function registerUser(user: UserProps) {
    try {
        const response = await fetch(`${API_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data = await response.json()
        return data
    } catch (error: any) {
        console.error(error.message);
    }
}

export async function getOrders(userId: number, token: string) {
    try {
        const response = await fetch(`${API_URL}/users/orders`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userId)
        })
        const data = await response.json()
        return data
    } catch (error: any) {
        console.error(error.message);
    }
}

export async function createOrder(userId: number, token: string, products: number[]) {
    try {
        const response = await fetch(`${API_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ userId, products })
        })
        const data = await response.json()
        return data
    } catch (error: any) {
        console.error(error.message);
    }
}