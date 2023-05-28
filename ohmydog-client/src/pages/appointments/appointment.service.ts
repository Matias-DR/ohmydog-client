import { Appointment } from "../../models/appointment.model"
import { AxiosCall } from "@/models/axios-call.model"
import axios from "axios"

export const appointment = (body: Appointment): AxiosCall<any> => {
    const controller = new AbortController()
    return {
        call: axios.post<any>(
            '/api/appointment',
            body,
            { signal: controller.signal }
        ),
        controller: controller
    }
}