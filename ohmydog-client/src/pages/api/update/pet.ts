import { petToAdapter } from '@/adapters'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const body = petToAdapter(req.body)
    const { token } = req.cookies
    axios.patch(
        `http://localhost:7162/api/mascota/${req.body.id}`,
        body,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
    )
        .then((response) => {
            res.status(200).json({ message: response.data })
        })
        .catch((err) => {
            const message = err.response?.data || 'Error al actualizar la mascota'
            res.status(500).json({ message })
        })
}