import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { appointmentFromAdapter } from '@/adapters'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const token = req.cookies.token
    const id = req.body.id
    axios.patch(
        `http://localhost:7162/api/turno/confirmar/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
    )
        .then((response) => {
            const appointment = appointmentFromAdapter(response.data)
            res.status(200).json(appointment)
        })
        .catch((err) => {
            // console.log(err)
            const message = err.response.data ?
                err.response.data
                : 'Error al aceptar el turno'
            res.status(500).json({ message })
        })
}