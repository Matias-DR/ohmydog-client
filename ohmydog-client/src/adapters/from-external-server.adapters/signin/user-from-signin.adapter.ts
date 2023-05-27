import { User } from '@/models/user.model'
import dayjs from 'dayjs'

const userFromSigninAdapter = (data: any): User => {
    const birthdate = dayjs(
        new Date(data.cliente.FechaNacimiento)
    )
        .format('DD/MM/YYYY')

    return {
        name: data.cliente.Nombre,
        lastname: data.cliente.Apellido,
        birthdate,
        dni: data.cliente.DNI,
        email: data.cliente.Email,
        celphone: data.cliente.Telefono,
        password: '',
        role: data.cliente.Rol,
    }
}

export default userFromSigninAdapter