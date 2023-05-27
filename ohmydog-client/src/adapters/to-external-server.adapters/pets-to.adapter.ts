import { Pet } from '@/models/pet.model'
import { petToAdapter } from '../'

const petsToAdapter = (data: any): Pet[] => {
    return data.pets.map((pet: any) => petToAdapter(pet))
}

export default petsToAdapter