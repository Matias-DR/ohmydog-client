import { Pet } from '@/models/pet.model'
import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

const addPet = (body: Pet): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.post<any>(
            '/api/add-pet',
            body,
            { signal: controller.signal }
        ),
        controller: controller
    }
}

export default addPet