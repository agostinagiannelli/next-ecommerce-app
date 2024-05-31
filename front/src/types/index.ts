export interface ICategory {
    name: string
}

export interface IProduct {
    name: string
    description: string
    shortDescription: string
    rating: number
    price: number
    stock: number
    image: string
    categoryId: number
}

export interface ICredential {
    id: number
    password: string
}

export interface IOrder {
    id: number
    status: "pending" | "approved" | "rejected"
    date: Date
    user: IUser
    products: IProduct[]
}

export interface IUser {
    id: number
    name: string
    email: string
    address: string
    phone: string
    role: "admin" | "user"
    credential: ICredential
    orders: IOrder[]
}