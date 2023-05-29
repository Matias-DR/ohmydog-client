import { Appointment } from '@/models/appointment.model'

const appointmentFromAdapter = (data: any): Appointment => {
    const time = data.turno.Horario ?
        data.turno.Horario.split(':') :
        data.turno.horario.split(':')

    return {
        id: data.turno.Id ? data.turno.Id : data.turno.id,
        email: data.turno.EmailFK ? data.turno.EmailFK : data.turno.emailFK,
        username: data.NombreCliente ? data.NombreCliente : data.nombreCliente,
        petname: data.NombreMascota ? data.NombreMascota : data.nombreMascota,
        userId: data.turno.IdCliente ? data.turno.IdCliente : data.turno.idCliente,
        petId: data.turno.IdMascota ? data.turno.IdMascota : data.turno.idMascota,
        reason: data.turno.Motivo ? data.turno.Motivo : data.turno.motivo,
        date: data.turno.Fecha ? data.turno.Fecha : data.turno.fecha,
        time: time[0] + ':' + time[1],
        status: data.turno.Estado ? data.turno.Estado : data.turno.estado,
    }
}

export default appointmentFromAdapter