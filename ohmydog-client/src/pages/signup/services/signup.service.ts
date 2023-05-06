import { User } from '@/models/user.model'
import { Session } from '@/models/session.model'
import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

export const signup = (user: User): AxiosCall<Session> => {
    const controller = new AbortController()
    return {
        call: axios.post<Session>('/api/signup', user, {signal: controller.signal}),
        controller
    }
}