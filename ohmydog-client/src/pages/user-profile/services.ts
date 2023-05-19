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
                '/api/changeuserdata',
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
        body: any,
        id: number
    ): AxiosCall<any> => {
        const controller = new AbortController()
        console.log('ESTOS SON LOS DATOS QUE SE ENVIARÁN', {...body, id: id})
        return {
            call: axios.post<any>(
                '/api/updatepet',
                { ...body, id: id },
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
    ): AxiosCall<any> => {
        const controller = new AbortController()
        return {
            call: axios.post<any>(
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
    },
    delPet: (
        token: string,
        id: number
    ): AxiosCall<any> => {
        const controller = new AbortController()
        console.log('service', id)
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