import { User } from '@/models/user.model'

const createUserAdapter = (data: any): User => ({
    nombre: data.username,
    apellido: data.userlastname,
    edad: data.userage,
    dni: data.userdni,
    email: data.useremail,
    telefono: data.usertelephone,
    contraseña: data.userpassword,
})

export default createUserAdapter