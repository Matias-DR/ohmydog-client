import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

export const getPets = (token: string): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.get<any>(
            '/api/get-pets',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                signal: controller.signal
            }
        ),
        controller
    }
}