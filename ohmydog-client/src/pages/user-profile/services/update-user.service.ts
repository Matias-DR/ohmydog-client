import { UpdateUser } from '@/models/update-data/update-user.model'
import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

const updateUser = (body: UpdateUser): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.post<any>(
            '/api/update/user',
            body,
            { signal: controller.signal }
        ),
        controller: controller
    }
}

export default updateUser