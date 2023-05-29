import { AxiosCall } from '@/models/axios-call.model'
import axios from 'axios'

const rejectAppointmentsService = (id: number): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.post<any>(
            '/api/appointments/reject-appointment',
            { id },
            { signal: controller.signal }
        ),
        controller: controller
    }
}

export default rejectAppointmentsService