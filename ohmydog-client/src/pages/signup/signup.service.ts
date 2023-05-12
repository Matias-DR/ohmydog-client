import { AxiosCall } from '@/models/axios-call.model'
import { Signup } from './signup.model'
import axios from 'axios'

export const signup = (body: Signup): AxiosCall<boolean> => {
    const controller = new AbortController()
    return {
        call: axios.post<boolean>(
            '/api/signup',
            body,
            { signal: controller.signal }),
        controller
    }
}