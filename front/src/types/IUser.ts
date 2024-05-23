enum Role {
    ADMIN = "admin",
    USER = "user"
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: Role;
    orders: [];
}