import { Credential } from './credential.model'
import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

export const signin = (body: Credential): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.post<any>(
            '/api/signin',
            body,
            { signal: controller.signal }
        ),
        controller
    }
}