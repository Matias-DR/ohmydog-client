import { Appointment } from "@/models/appointment.model"

const appointmentToAdapter = (appointment: Appointment): any => {
    return {
        Motivo: appointment.reason,
        Fecha: appointment.date,
        Hora: appointment.time,
        Mascota: appointment.petId,
        Comentario: appointment.comment,
    }
}

export default appointmentToAdapter