import { ChangeUserData } from './change-user-data.model'
import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'
import { config } from 'process'

export const services = {
    changeUserData: (
        token: string,
        body: ChangeUserData
    ): AxiosCall<boolean> => {
        const controller = new AbortController()
        return {
            call: axios.post<boolean>(
                '/api/change-user-data',
                {
                    data: { token, body },
                    config: { signal: controller.signal }
                },
                
            ),
            controller: controller
        }
    },
    getPassword: (token: string): AxiosCall<string> => {
        const controller = new AbortController()
        return {
            call: axios.post<string>(
                '/api/get-current-password',
                token,
                { signal: controller.signal }
            ),
            controller
        }
    }
}