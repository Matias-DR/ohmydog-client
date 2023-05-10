import { User } from '@/models/user.model'
import { Session } from '@/models/session.model'
import { AxiosCall } from '@/models/axios-call.model'
import { Pet } from '@/models/pet.model'
import axios from 'axios'

export interface SignupBodyProps {
    cliente: User
    mascota: Pet
}

export const signup = (body: SignupBodyProps): AxiosCall<Session> => {
    const controller = new AbortController()
    return {
        call: axios.post<Session>('/api/signup', body, {signal: controller.signal}),
        controller
    }
}