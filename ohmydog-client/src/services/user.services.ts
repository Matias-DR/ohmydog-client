import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

export const getUser = (token: string): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.get<any>(
            '/api/get-user',
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