import { Pet } from '@/models/pet.model'
import { petAdapter } from '../'

const petsAdapter = (data: any): Pet[] => {
    return data.mascotas.map((pet: any) => petAdapter(pet))
}

export default petsAdapter