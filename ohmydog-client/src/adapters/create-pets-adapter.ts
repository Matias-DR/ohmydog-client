import { Pet } from '@/models/pet.model'
import { createPetAdapter } from './'

const createPetsAdapter = (data: any): Pet[] => {
    return data.mascotas.map((pet: any) => createPetAdapter(pet))
}

export default createPetsAdapter