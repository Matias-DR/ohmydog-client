import { User } from '@/models/user.model'
import { Pet } from '@/models/pet.model'

export interface Signup {
    user: User
    pet: Pet
}