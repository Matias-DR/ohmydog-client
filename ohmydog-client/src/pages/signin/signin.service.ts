import { Credential } from './credential.model'
import { AxiosCall } from '@/models/axios-call.model'
import { Session } from '@/models/session.model'
import axios from 'axios'

export const signin = (body: Credential): AxiosCall<Session> => {
    const controller = new AbortController()
    return {
        call: axios.post<Session>('/api/signin', body, {signal: controller.signal}),
        controller
    }
}