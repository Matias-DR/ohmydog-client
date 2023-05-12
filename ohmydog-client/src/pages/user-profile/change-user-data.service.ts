import { AxiosCall } from '@/models/axios-call.model'
import { ChangeUserData } from './change-user-data.model'
import axios from 'axios'

export const changeUserData = (body: ChangeUserData): AxiosCall<boolean> => {
    const controller = new AbortController()
    return {
        call: axios.post<boolean>(
            '/api/change-user-data',
            body,
            { signal: controller.signal }),
        controller
    }
}