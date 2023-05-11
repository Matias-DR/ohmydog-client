import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

export const signup = (body: FormData): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.post<any>(
            '/api/signup',
            body,
            {
                signal: controller.signal,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }),
        controller
    }
}