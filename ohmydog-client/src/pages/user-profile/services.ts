import { ChangeUserData } from './change-user-data.model'
import { Pet } from '@/models/pet.model'
import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

export const services = {
    changeUserData: (
        token: string,
        body: ChangeUserData
    ): AxiosCall<any> => {
        const controller = new AbortController()
        return {
            call: axios.post<any>(
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
        body: Pet,
    ): AxiosCall<any> => {
        const controller = new AbortController()
        return {
            call: axios.post<any>(
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
    addPet: (
        token: string,
        body: Pet
    ): AxiosCall<any> => {
        const controller = new AbortController()
        return {
            call: axios.post<any>(
                '/api/add-pet',
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
    delPet: (
        token: string,
        id: number
    ): AxiosCall<any> => {
        const controller = new AbortController()
        return {
            call: axios.post<any>(
                '/api/del-pet',
                { id: id },
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