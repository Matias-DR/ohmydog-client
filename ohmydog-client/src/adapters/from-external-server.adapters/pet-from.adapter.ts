import { Pet } from '@/models/pet.model'
import dayjs from 'dayjs'

const petFromAdapter = (data: any): Pet => {
    const birthdate = dayjs(
        new Date(
            data.fechaNacimiento ? data.fechaNacimiento : data.FechaNacimiento
        )
    ).format('DD/MM/YYYY')

    return {
        id: data.id ? data.id : data.Id,
        name: data.nombre ? data.nombre : data.Nombre,
        race: data.raza ? data.raza : data.Raza,
        color: data.color ? data.color : data.Color,
        birthdate: birthdate,
        sex: data.sexo ? data.sexo : data.Sexo,
        size: data.tamaño ? data.tamaño : data.Tamaño,
        weight: data.peso ? data.peso : data.Peso,
        origin: data.origen ? data.origen : data.Origen,
        caracteristics: data.caracteristica ? data.caracteristica : data.Caracteristica,
        photo: data.rutaImagen ? data.rutaImagen : data.RutaImagen,
    }
}

export default petFromAdapter