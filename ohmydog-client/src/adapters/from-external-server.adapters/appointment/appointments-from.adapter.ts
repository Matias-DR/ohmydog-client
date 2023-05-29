import { Appointment } from '@/models/appointment.model'
import { appointmentFromAdapter } from '@/adapters'

const appointmentsFromAdapter = (data: any): Appointment[] => {
    return data.map((appointment: any) => appointmentFromAdapter(appointment))
}

export default appointmentsFromAdapter