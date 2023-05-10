import { Pet } from '@/models/pet.model'

const createPetAdapter = (data: any): Pet => ({
    nombre: data.petname,
    edad: data.petage,
    sexo: data.petsex,
    tamanio: data.petsize,
    caracteristica: data.petcaracteristics,
    peso: data.petweight,
    raza: data.petrace,
    color: data.petcolor,
    origen: data.petorigin,
})

export default createPetAdapter