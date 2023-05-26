import { Credential } from '@/models/auth/credential.model'
import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

export const signin = (body: Credential): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.post<any>(
            '/api/auth/signin',
            body,
            { signal: controller.signal }
        ),
        controller
    }
}