export interface User{
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string
    password: string;
    confirmPasswordaddress: string;
}

export interface LoginCredentials{
    email: string;
    password: string;
}

export interface RegisterCredentials{
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string
    password: string;
    confirmPasswordaddress: string;
}