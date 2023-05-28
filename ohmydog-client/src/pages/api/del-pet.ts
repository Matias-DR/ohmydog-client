import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const id = req.body.id
    const token = req.cookies.token
    axios.delete(
        `http://localhost:7162/api/mascota/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
        .then((response) => {
            res.status(200).json({ message: response.data })
        })
        .catch((err) => {
            const message = err.response.data ?
                err.response.data
                : 'Error al eliminar la mascota'
            res.status(500).json({ message })
        })
}