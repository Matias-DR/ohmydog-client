import { Pet } from '@/models/pet.model'

const createPetAdapter = (data: any): Pet => ({
    name: data.petname,
    age: data.petage,
    sex: data.petsex,
    size: data.petsize,
    caracteristics: data.petcaracteristics,
    weight: data.petweight,
    race: data.petrace,
    color: data.petcolor,
    origin: data.petorigin,
})

export default createPetAdapter