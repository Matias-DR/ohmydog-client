export interface User {
    nombre: string,
    apellido: string,
    edad: number,
    dni: number,
    email: string,
    telefono: string,
    contraseña: string,
    confirmacioncontraseña?: string,
    nuevacontraseña?: string,
    rol?: string
}