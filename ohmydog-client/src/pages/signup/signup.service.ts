import { AxiosCall } from '@/models/axios-call.model'
import { Signup } from '@/pages/signup/signup.model'
import axios from 'axios'

export const signup = (body: Signup): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.post<any>('/api/signup', body, {signal: controller.signal}),
        controller
    }
}