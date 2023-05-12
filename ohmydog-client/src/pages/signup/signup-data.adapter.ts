import { Signup } from "./signup.model"

export const signupDataAdapter = (data: any): Signup => {
    return {
        cliente: {
            nombre: data.cliente.nombre,
            apellido: data.cliente.apellido,
            edad: data.cliente.edad,
            dni: data.cliente.dni,
            email: data.cliente.email,
            telefono: data.cliente.telefono,
            contraseña: data.cliente.contraseña,
        },
        mascota: {
            nombre: data.mascota.nombre,
            raza: data.mascota.raza,
            color: data.mascota.color,
            edad: data.mascota.edad,
            sexo: data.mascota.sexo,
            tamaño: data.mascota.tamaño,
            peso: data.mascota.peso,
            origen: data.mascota.origen,
            caracteristica: data.mascota.caracteristica,
            foto: data.mascota.foto,
        }
    }
}