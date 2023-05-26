import { User } from "@/models/user.model"

const userAdapter = (data: any): User => {
    return {
        name: data.cliente.Nombre,
        lastname: data.cliente.Apellido,
        age: data.cliente.Edad,
        dni: data.cliente.DNI,
        email: data.cliente.Email,
        celphone: data.cliente.Telefono,
        password: '',
        role: data.cliente.Rol,
    }
}

export default userAdapter