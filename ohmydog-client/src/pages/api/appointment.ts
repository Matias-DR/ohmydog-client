import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { appointmentToAdapter } from '../appointments/adapters'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const token = req.cookies.token
    const body = appointmentToAdapter(req.body)
    axios.post(
        `http://localhost:7162/api/turnos`,
        body,
        { headers: { Authorization: `Bearer ${token}` } }
    )
        .then((response) => {
            res.status(200).json({ message: response.data })
        })
        .catch((err) => {
            const message = err.response.data ?
                err.response.data
                : 'Error al solicitar el turno'
            res.status(500).json({ message })
        })
}