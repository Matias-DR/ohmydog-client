import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { appointmentsFromAdapter } from '@/adapters'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const token = req.cookies.token
    axios.get(
        `http://localhost:7162/api/turno/nodisponibles`,
        { headers: { Authorization: `Bearer ${token}` } }
    )
        .then((response) => {
            const appointments = appointmentsFromAdapter(response.data)
            res.status(200).json(appointments)
        })
        .catch((err) => {
            const message = err.response.data ?
                err.response.data
                : 'Error al cargar los turnos aceptados'
            res.status(500).json({ message })
        })
}