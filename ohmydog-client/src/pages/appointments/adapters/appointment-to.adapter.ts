const appointmentToAdapter = (data: any) => {
    return {
        idMascota: data.petId,
        motivo: data.reason,
        fecha: data.date + ' ' + data.time
    }
}

export default appointmentToAdapter