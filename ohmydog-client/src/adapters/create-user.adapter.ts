import { User } from '@/models/user.model'

const createUserAdapter = (data: any): User => ({
    username: data.username,
    lastname: data.lastname,
    age: data.age,
    dni: data.dni,
    email: data.email,
    telephone: data.telephone,
    password: data.password,
})

export default createUserAdapter