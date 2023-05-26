import { User } from "@/models/user.model"

const userAdapter = (user: User): any => {
    return {
        Nombre: user.name,
        Apellido: user.lastname,
        Contraseña: user.password,
        Email: user.email,
        Telefono: user.celphone,
        FechaNacimiento: user.birthdate,
        DNI: user.dni,
        RolCliente: user.role ? user.role : 'Cliente'
    }
}

export default userAdapter