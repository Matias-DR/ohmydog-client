import { AxiosCall } from '@/models/axios-call.model'
import { Signup } from './signup.model'
import { axiosInstance } from '@/utilities/unlimited-size-axios.utility'

export const signup = (body: Signup): AxiosCall<boolean> => {
    const controller = new AbortController()
    return {
        call: axiosInstance.post<boolean>(
            '/api/signup',
            body,
            { signal: controller.signal }),
        controller
    }
}