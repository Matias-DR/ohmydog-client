import { UpdatePet } from '@/models/update-data/update-pet.model'
import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

export const updatePet = (body: UpdatePet): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.post<any>(
            '/api/update/pet',
            body,
            { signal: controller.signal }
        ),
        controller: controller
    }
}

export default updatePet