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
        console.error(error);
    }
};

export async function getProductById(id: string) {
    try {
        const products = await getProducts()
        const product = products?.find((product) => product.id?.toString() === id)
        if (!product) throw new Error('Product not found')
        return product
    } catch (error: any) {
        console.error(error);
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
        console.error(error);
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
        console.error(error);
    }
}

export async function getOrders(userId: number) {
    try {
        const response = await fetch(`${API_URL}/users/orders`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userId)
        })
        const data = await response.json()
        return data
    } catch (error: any) {
        console.error(error);
    }
}

// export async function createOrder(userId: number, products: ProductProps[]) {
//     try {
//         const response = await fetch(`${API_URL}/orders`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ userId, products })
//         })
//         const data = await response.json()
//         return data
//     } catch (error: any) {
//         console.error(error);
//     }
// }


//? M3

// export async function getUsers() {
//     const response = await apiService.get('/users');
//     return response.data;
// };
// export async function getUserById(id) {
//     const response = await apiService.get(`/users/${id}`);
//     return response.data;
// };
// export async function registerUser(user) {
//     const response = await apiService.post('/users/register', user);
//     return response.data;
// };
// export async function loginUser(credential) {
//     const response = await apiService.post('/users/login', credential);
//     return response.data;
// };

// export async function getAppointments() {
//     const response = await apiService.get(`/appointments/`);
//     return response.data;
// };
// export async function getAppointmentById(id) {
//     const response = await apiService.get(`/appointments/${id}`);
//     return response.data;
// };
// export async function scheduleAppointment(appointment) {
//     const response = await apiService.post('/appointments/schedule', appointment);
//     return response.data;
// };
// export async function cancelAppointment(id) {
//     const response = await apiService.put(`/appointments/cancel/${id}`);
//     return response.data;
// };