import { ChangeUserData } from './change-user-data.model'
import { Pet } from '@/models/pet.model'
import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

export const services = {
    changeUserData: (
        token: string,
        body: ChangeUserData
    ): AxiosCall<boolean> => {
        const controller = new AbortController()
        return {
            call: axios.post<boolean>(
                '/api/change-user-data',
                body,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    signal: controller.signal
                }
            ),
            controller: controller
        }
    },
    updatePet: (
        token: string,
        body: Pet
    ): AxiosCall<boolean> => {
        const controller = new AbortController()
        return {
            call: axios.post<boolean>(
                '/api/update-pet',
                body,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    signal: controller.signal
                }
            ),
            controller: controller
        }
    },
    newPet: (
        token: string,
        body: Pet
    ): AxiosCall<boolean> => {
        const controller = new AbortController()
        return {
            call: axios.post<boolean>(
                '/api/new-pet',
                body,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    signal: controller.signal
                }
            ),
            controller: controller
        }
    }
}