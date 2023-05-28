import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

const delPetById = (id: number): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.post<any>(
            '/api/del-pet',
            { id },
            { signal: controller.signal }
        ),
        controller: controller
    }
}

export default delPetById