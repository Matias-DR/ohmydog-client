import { Pet } from '@/models/pet.model'
import { petFromAdapter } from '../../'

const petsFromSigninAdapter = (data: any): Pet[] => {
    return data.mascotas ?
    data.mascotas.map((pet: any) => petFromAdapter(pet))
    : data.Mascotas ?
    data.Mascotas.map((pet: any) => petFromAdapter(pet))
    : []
}

export default petsFromSigninAdapter