import { Appointment } from "../../models/appointment.model"
import { AxiosCall } from "@/models/axios-call.model"
import axios from "axios"

export const appointmentService = (body: Appointment): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.post<any>(
            '/api/appointments/request-appointment',
            body,
            { signal: controller.signal }
        ),
        controller: controller
    }
}