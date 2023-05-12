import { Pet } from '@/models/pet.model'

const createPetsAdapter = (data: any): Pet[] => {
    return [
        ...data.mascotas
    ]
}

export default createPetsAdapter