import { Pet } from "@/models/pet.model"
import { petAdapter } from "@/adapters"

const petsAdapter = (pets: Pet[]): any[] => {
    return pets.map((pet: Pet) => petAdapter(pet))
}

export default petsAdapter