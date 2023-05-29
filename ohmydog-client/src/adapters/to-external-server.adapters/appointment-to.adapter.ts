import { Appointment } from "@/models/appointment.model"

const appointmentToAdapter = (appointment: Appointment): any => {
    return {
        Motivo: appointment.reason,
        Fecha: appointment.date,
        idMascota: appointment.petId,
        Horario: appointment.time + ':00',
        // Comentario: appointment.comment,
    }
}

export default appointmentToAdapter