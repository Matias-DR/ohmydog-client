import { Pet } from '@/models/pet.model'
import { petFromAdapter } from '../../'

const petsFromSigninAdapter = (data: any): Pet[] => {
    return data.mascotas.map((pet: any) => petFromAdapter(pet))
}

export default petsFromSigninAdapter