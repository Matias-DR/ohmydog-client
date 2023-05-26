import { Signup } from '@/models/auth/signup.model'
import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

export const signup = (body: Signup): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.post<any>(
            '/api/auth/signup',
            body,
            { signal: controller.signal }),
        controller
    }
}