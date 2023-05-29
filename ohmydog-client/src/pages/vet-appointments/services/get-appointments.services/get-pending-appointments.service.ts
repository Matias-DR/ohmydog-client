import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

const getPendingAppointmentsService = (): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.get<any>(
            '/api/appointments/get/pendient-appointments',
            { signal: controller.signal }
        ),
        controller: controller
    }
}

export default getPendingAppointmentsService