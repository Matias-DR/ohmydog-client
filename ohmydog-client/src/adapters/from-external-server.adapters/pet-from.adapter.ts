import { Pet } from '@/models/pet.model'
import dayjs from 'dayjs'

const petFromAdapter = (data: any): Pet => {
    const birthdate = dayjs(
        new Date(data.FechaNacimiento)
    )
        .format('DD/MM/YYYY')

    return {
        id: data.Id,
        name: data.Nombre,
        race: data.Raza,
        color: data.Color,
        birthdate: birthdate,
        sex: data.Sexo,
        size: data.Tamaño,
        weight: data.Peso,
        origin: data.Origen,
        caracteristics: data.Caracteristica,
        photo: data.RutaImagen,
    }
}

export default petFromAdapter