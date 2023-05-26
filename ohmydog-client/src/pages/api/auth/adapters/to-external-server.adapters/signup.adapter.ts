import {
    userAdapter,
    petAdapter
} from '@/adapters'

const signupAdapter = (data: any): any => {
    const { user, pet } = data
    const cliente = userAdapter(user)
    const mascota = petAdapter(pet)
    return {
        cliente,
        mascota
    }
}

export default signupAdapter