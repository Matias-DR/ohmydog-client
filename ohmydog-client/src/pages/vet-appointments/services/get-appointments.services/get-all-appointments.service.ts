import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

const getAllAppointmentsService = (): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.get<any>(
            '/api/appointments/get/all-appointments',
            { signal: controller.signal }
        ),
        controller: controller
    }
}

export default getAllAppointmentsService