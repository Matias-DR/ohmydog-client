import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

const acceptAppointmentsService = (id: number): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.post<any>(
            '/api/appointments/accept-appointment',
            { id },
            { signal: controller.signal }
        ),
        controller: controller
    }
}

export default acceptAppointmentsService