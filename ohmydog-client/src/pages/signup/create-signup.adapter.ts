import { Signup } from './signup.model'
import {
    createUserAdapter,
    createPetAdapter
} from '@/adapters'

export const createSignupAdapter = (data: any): Signup => ({
    cliente: createUserAdapter(data),
    mascota: createPetAdapter(data),
})