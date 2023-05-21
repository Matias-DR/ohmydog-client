import { User } from "@/models/user.model"

const createUserAdapter = (data: any): User => {
    return {
        nombre: data.nombre,
        apellido: data.apellido,
        edad: data.edad,
        dni: data.dni,
        email: data.email,
        telefono: data.telefono,
        contraseña: '',
        rol: data.rol,
    }
}

export default createUserAdapter