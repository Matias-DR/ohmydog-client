import { Pet } from '@/models/pet.model'

const petAdapter = (data: any): Pet => {
    return {
        id: data.id,
        name: data.nombre,
        race: data.raza,
        color: data.color,
        age: data.edad,
        sex: data.sexo,
        size: data.tamaño,
        weight: data.peso,
        origin: data.origen,
        caracteristics: data.caracteristica,
        photo: data.rutaImagen,
    }
}

export default petAdapter