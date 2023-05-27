import { User } from '@/models/user.model'

const userToAdapter = (data: User): any => {
    return {
        Nombre: data.name,
        Apellido: data.lastname,
        FechaNacimiento: data.birthdate,
        DNI: data.dni,
        Email: data.email,
        Telefono: data.celphone,
        Contraseña: data.password,
        Rol: data.role,
    }
}

export default userToAdapter