import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

const getAcceptedAppointmentsService = (): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.get<any>(
            '/api/appointments/get/accepted-appointments',
            { signal: controller.signal }
        ),
        controller: controller
    }
}

export default getAcceptedAppointmentsService