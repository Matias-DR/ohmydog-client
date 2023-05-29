import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

const getRejectedAppointmentsService = (): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.get<any>(
            '/api/appointments/get/rejected-appointments',
            { signal: controller.signal }
        ),
        controller: controller
    }
}

export default getRejectedAppointmentsService