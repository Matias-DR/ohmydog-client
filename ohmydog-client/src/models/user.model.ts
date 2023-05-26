export interface User {
    name: string,
    lastname: string,
    birthdate: string,
    dni: number,
    email: string,
    celphone: string,
    password: string,
    passwordconfirm?: string,
    passwordnew?: string,
    role: string
}