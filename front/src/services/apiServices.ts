import { ProductProps } from '@/types/ProductProps'
import { CredentialProps } from '@/types/CredentialProps'
import { UserProps } from '@/types/UserProps'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export async function getProducts() {
    try {
        const response = await fetch(`${API_URL}/products`, {
            method: 'GET',
            // cache: 'no-cache'
            next: { revalidate: 3600 }
        })

        if (!response.ok) {
            const error = await response.text()
            throw new Error(`Error: ${response.status} ${response.statusText} - ${error}`)
        }

        const products: ProductProps[] = await response.json()
        return products
    } catch (error: any) {
        console.error(error.message)
    }
}

export async function getProductById(id: string) {
    try {
        const products = await getProducts()
        const product = products?.find((product) => product.id?.toString() === id)

        if (!product) throw new Error('Product not found')
            
        return product
    } catch (error: any) {
        console.error(error.message)
    }
}

export async function getProductsByCategory(id: string) {
    try {
        const products = await getProducts()
        const productsInCategory = products?.filter(product => product.categoryId.toString() === id)

        if (productsInCategory?.length === 0) throw new Error('No products found for the given category')

        return productsInCategory
    } catch (error: any) {
        console.error(error.message)
    }
}

export async function loginUser(credentials: CredentialProps) {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        if (!response.ok) {
            const error = await response.text()
            throw new Error(`Error: ${response.status} ${response.statusText} - ${error}`)
        }

        return await response.json()
    } catch (error: any) {
        console.error(error.message)
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

        if (!response.ok) {
            const error = await response.text()
            throw new Error(`Error: ${response.status} ${response.statusText} - ${error}`)
        }

        return await response.json()
    } catch (error: any) {
        console.error(error.message)
    }
}

export async function getOrders(token: string) {
    try {
        const response = await fetch(`${API_URL}/users/orders`, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                Authorization: token
            }
        })

        if (!response.ok) {
            const error = await response.text()
            throw new Error(`Error: ${response.status} ${response.statusText} - ${error}`)
        }

        return await response.json()
    } catch (error: any) {
        console.error(error.message)
    }
}

export async function createOrder(token: string, products: number[]) {
    try {
        const response = await fetch(`${API_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            },
            body: JSON.stringify({ products })
        })

        if (!response.ok) {
            const error = await response.text()
            throw new Error(`Error: ${response.status} ${response.statusText} - ${error}`)
        }

        return await response.json()
    } catch (error: any) {
        console.error(error.message)
    }
}