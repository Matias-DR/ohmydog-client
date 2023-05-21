import { Pet } from '@/models/pet.model'

const createPetAdapter = (pet: any): Pet => {
    return {
        id: pet.id,
        nombre: pet.nombre,
        raza: pet.raza,
        color: pet.color,
        edad: pet.edad,
        sexo: pet.sexo,
        tamaño: pet.tamaño,
        peso: pet.peso,
        origen: pet.origen,
        caracteristica: pet.caracteristica,
        foto: pet.rutaImagen,
    }
}

export default createPetAdapter