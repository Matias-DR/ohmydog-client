import { Pet } from '@/models/pet.model'
import { defaultPetPhoto } from '@/assets/images'

const petAdapter = (pet: Pet): any => {
    return {
        id: pet.id,
        Nombre: pet.name,
        Raza: pet.race,
        Color: pet.color,
        FechaNacimiento: pet.birthdate,
        Sexo: pet.sex,
        Tamaño: pet.size,
        Peso: pet.weight,
        Origen: pet.origin,
        Caracteristica: pet.caracteristics,
        Foto: pet.photo ? pet.photo : defaultPetPhoto,
    }
}

export default petAdapter