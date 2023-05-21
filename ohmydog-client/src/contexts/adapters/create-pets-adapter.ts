import { Pet } from "@/models/pet.model"
import { createPetAdapter } from '@/adapters'

const createPetsAdapter = (data: any): Pet[] => {
    return data.map((pet: any) => createPetAdapter(pet))
}

export default createPetsAdapter