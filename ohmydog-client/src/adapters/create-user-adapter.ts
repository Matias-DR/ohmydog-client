import { User } from "@/models/user.model"

const createUserAdapter = (data: any): User => {
    return {
        nombre: data.cliente.nombre,
        apellido: data.cliente.apellido,
        edad: data.cliente.edad,
        dni: data.cliente.dni,
        email: data.cliente.email,
        telefono: data.cliente.telefono,
        contraseña: '',
    }
}

export default createUserAdapter