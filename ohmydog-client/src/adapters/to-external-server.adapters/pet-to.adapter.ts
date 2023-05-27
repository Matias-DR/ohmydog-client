import { Pet } from "@/models/pet.model"

const petToAdapter = (data: Pet): any => {
    return {
        Id: data.id,
        Nombre: data.name,
        Raza: data.race,
        Color: data.color,
        FechaNacimiento: data.birthdate,
        Sexo: data.sex,
        Tamaño: data.size,
        Peso: data.weight,
        Origen: data.origin,
        Caracteristica: data.caracteristics,
        Foto: data.photo,
    }
}

export default petToAdapter