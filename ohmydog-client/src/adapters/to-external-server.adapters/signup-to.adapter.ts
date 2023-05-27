import {
    userToAdapter,
    petToAdapter
} from '../'
import { Signup } from '@/models/auth/signup.model'

const signupToAdapter = (data: Signup): any => {
    const { user, pet } = data
    const cliente = userToAdapter(user)
    const mascota = petToAdapter(pet)
    return {
        cliente,
        mascota
    }
}

export default signupToAdapter