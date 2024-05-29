import axios from 'axios'
import { UserProps } from '@/types/UserProps'
import { CredentialsProps } from '@/types/CredentialsProps'
// import { ProductProps } from '@/types/ProductProps'

const API_URL = 'http://localhost:8000'

export const apiService = axios.create({
    baseURL: API_URL
});

export async function getProducts() {
    const response = await apiService.get('/users');
    return response.data;
};

export async function registerUser(user: UserProps) {
    const response = await apiService.post('/users/register', user);
    return response.data;
};

export async function loginUser(credentials: CredentialsProps) {
    const response = await apiService.post('/users/login', credentials);
    return response.data;
};

// export async function getOrders(userId: number) {
//     const response = await apiService.get('/users/orders', userId);
//     return response.data;
// };

// export async function createOrder(userId: number, products: ProductProps[]) {
//     const response = await apiService.post('/orders', userId, products);
//     return response.data;
// };



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