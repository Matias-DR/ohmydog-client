import { UserDataWithPasswordConfirmation } from './user-data-with-password-confirmation.model'
import { Pet } from '@/models/pet.model'

export interface Signup {
    user: UserDataWithPasswordConfirmation
    pet: Pet
}