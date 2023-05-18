import { Pet } from '@/models/pet.model'

const createPetAdapter = (pet: any): Pet => {
    return {
        id: pet.Id,
        nombre: pet.Nombre,
        raza: pet.Raza,
        color: pet.Color,
        edad: pet.Edad,
        sexo: pet.Sexo,
        tamaño: pet.Tamaño,
        peso: pet.Peso,
        origen: pet.Origen,
        caracteristica: pet.Caracteristica,
        foto: pet.RutaImagen,
    }
}

export default createPetAdapter