import { User } from "@/models/user.model"

const createUserAdapter = (data: any): User => {
    return {
        nombre: data.cliente.Nombre,
        apellido: data.cliente.Apellido,
        edad: data.cliente.Edad,
        dni: data.cliente.DNI,
        email: data.cliente.Email,
        telefono: data.cliente.Telefono,
        contraseña: '',
        rol: data.cliente.Rol,
    }
}

export default createUserAdapter