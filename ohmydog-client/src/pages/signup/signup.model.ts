import { User } from '@/models/user.model'
import { Pet } from '@/models/pet.model'

export interface Signup {
    cliente: User
    mascota: Pet
}